#!/usr/bin/env node

/**
 * Convert Markdown files to PDF with proper Mermaid rendering delay.
 */

const fs = require('fs').promises;
const path = require('path');
const puppeteer = require('puppeteer');
const { marked } = require('marked');
const { execSync } = require('child_process');

// Helper function to convert image to base64
async function imageToBase64(imagePath) {
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const ext = path.extname(imagePath).slice(1);
    const mimeTypes = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp'
    };
    const mimeType = mimeTypes[ext] || 'image/png';
    return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
  } catch (error) {
    console.warn(`   ⚠️  Could not read image: ${imagePath}`);
    return null;
  }
}

// Helper function to create zip with all PDFs
async function createPdfZip() {
  const zipFileName = 'documentation-pdfs.zip';
  const tempDir = path.join(process.cwd(), 'temp_zip_pdfs');

  try {
    console.log();
    console.log('='.repeat(60));
    console.log('📦 Creating PDF Zip Package');
    console.log('='.repeat(60));

    // Clean up temp directory if exists
    await fs.rm(tempDir, { recursive: true, force: true });
    await fs.mkdir(tempDir, { recursive: true });

    const pdfFiles = [];

    for (const folderName of Object.keys(FILES_TO_CONVERT)) {
      const folderPath = path.join('docs', folderName);
      const targetDir = path.join(tempDir, folderName);

      try {
        await fs.mkdir(targetDir, { recursive: true });
        const entries = await fs.readdir(folderPath);

        for (const entry of entries) {
          if (entry.endsWith('.pdf')) {
            const srcPath = path.join(folderPath, entry);
            const destPath = path.join(targetDir, entry);
            await fs.copyFile(srcPath, destPath);
            pdfFiles.push(path.join(folderName, entry));
            console.log(`   ✓ ${path.join(folderName, entry)}`);
          }
        }
      } catch (error) {
        console.warn(`   ⚠️  Skipping ${folderName}: ${error.message}`);
      }
    }

    if (pdfFiles.length === 0) {
      console.log('   ⚠️  No PDF files found');
      return;
    }

    console.log();
    console.log(`📊 Total PDFs: ${pdfFiles.length}`);
    console.log(`📦 Creating ${zipFileName}...`);

    // Remove existing zip
    try {
      await fs.unlink(zipFileName);
    } catch {
      // File doesn't exist
    }

    // Create zip
    execSync(
      `cd "${tempDir}" && powershell Compress-Archive -Path * -DestinationPath "../${zipFileName}" -Force`,
      { stdio: 'inherit' }
    );

    // Get zip size
    const zipStats = await fs.stat(zipFileName);
    const sizeKB = (zipStats.size / 1024).toFixed(2);
    const sizeMB = (zipStats.size / 1024 / 1024).toFixed(2);

    console.log();
    console.log(`✅ Created: ${zipFileName} (${sizeMB} MB)`);

  } catch (error) {
    console.error(`❌ Error creating zip: ${error.message}`);
  } finally {
    // Cleanup temp directory
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

const FILES_TO_CONVERT = {
  'Tech Principles': [
    '01-architecture-overview.md',
    '02-data-types.md',
    '03-modules-forms.md',
    '04-modules-workflows.md',
    '05-standards.md',
  ],
  'Requirements HRIS and ATS': [
    '00-overview.md',
    '01-entities.md',
    '02-data-model-erd.md',
    '03-architecture.md',
    '04-ui-mockups.md',
  ]
};

// HTML template with Mermaid support
const HTML_TEMPLATE = (content, title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.7;
      color: #333;
      background: white;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      font-weight: 600;
      line-height: 1.3;
    }
    h1 {
      font-size: 2.5em;
      border-bottom: 2px solid #eee;
      padding-bottom: 0.3em;
    }
    h2 {
      font-size: 2em;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.3em;
    }
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1.25em;
    }
    p {
      margin: 1em 0;
    }
    ul, ol {
      padding-left: 2em;
    }
    li {
      margin: 0.5em 0;
    }
    code {
      background: #f4f4f4;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 0.9em;
    }
    pre {
      background: #f4f4f4;
      padding: 1em;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1em 0;
    }
    pre code {
      background: none;
      padding: 0;
      font-size: 0.9em;
    }
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 1em;
      margin: 1em 0;
      color: #666;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1.5em 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }
    th {
      background: #f4f4f4;
      font-weight: 600;
    }
    .mermaid {
      background: #fafafa;
      padding: 20px;
      margin: 20px 0;
      text-align: center;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1.5em 0;
      border-radius: 4px;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    @media print {
      body {
        padding: 0;
      }
      h1, h2, h3 {
        page-break-after: avoid;
      }
      table, pre, blockquote {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  ${content}
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      logLevel: 'error'
    });

    // Signal that mermaid has started rendering
    window.mermaidStarted = true;
  </script>
</body>
</html>`;

async function convertMarkdownToHTML(markdown, title, folderPath) {
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false
  });

  let html = marked.parse(markdown);

  // Fix Mermaid code blocks
  html = html.replace(
    /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
    '<pre class="mermaid">$1</pre>'
  );

  // Convert relative image paths to base64 data URIs
  const imagePromises = [];
  const imageMatches = [...html.matchAll(/<img src="([^"]+)"([^>]*)>/g)];

  for (const match of imageMatches) {
    const src = match[1];
    const fullTag = match[0];

    // Only process local images (not http/https/data URLs)
    if (!src.match(/^https?:\/\//) && !src.startsWith('data:')) {
      imagePromises.push(
        (async () => {
          const absolutePath = path.resolve(folderPath, src);
          const base64 = await imageToBase64(absolutePath);
          if (base64) {
            const newTag = fullTag.replace(src, base64);
            return { oldTag: fullTag, newTag };
          }
          return null;
        })()
      );
    }
  }

  const replacements = await Promise.all(imagePromises);

  for (const replacement of replacements) {
    if (replacement) {
      html = html.replace(replacement.oldTag, replacement.newTag);
    }
  }

  return HTML_TEMPLATE(html, title);
}

async function convertFile(folderName, fileName, saveHTML = false) {
  const folderPath = path.join('docs', folderName);
  const inputPath = path.join(folderPath, fileName);
  const outputFileName = fileName.replace('.md', '.pdf');
  const outputPath = path.join(folderPath, outputFileName);
  const htmlOutputPath = path.join(folderPath, fileName.replace('.md', '.html'));
  const title = fileName.replace('.md', '');

  try {
    console.log(`   📄 Converting: ${fileName}`);

    // Read markdown file
    const markdown = await fs.readFile(inputPath, 'utf-8');

    // Convert to HTML
    const html = await convertMarkdownToHTML(markdown, title, folderPath);

    // Save HTML for debugging
    if (saveHTML) {
      await fs.writeFile(htmlOutputPath, html);
      console.log(`   💾 Saved HTML: ${fileName.replace('.md', '.html')}`);
    }

    // Launch Puppeteer with additional permissions for local file access
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--allow-file-access-from-files',
        '--disable-web-security'
      ]
    });

    try {
      const page = await browser.newPage();

      // Set content with base URL for resolving relative paths
      await page.setContent(html, {
        waitUntil: ['networkidle0', 'domcontentloaded', 'load'],
        timeout: 30000
      });

      // Wait for Mermaid to be available
      await page.waitForFunction(() => {
        return typeof window.mermaid !== 'undefined';
      }, { timeout: 10000 });

      // Wait for window.mermaidStarted to be true
      await page.waitForFunction(() => {
        return window.mermaidStarted === true;
      }, { timeout: 10000 });

      // Count Mermaid diagrams
      const mermaidCount = await page.evaluate(() => {
        return document.querySelectorAll('.mermaid').length;
      });

      if (mermaidCount > 0) {
        console.log(`      Found ${mermaidCount} Mermaid diagram(s), waiting for render...`);

        // Wait for Mermaid diagrams to render (check for SVG elements)
        await page.waitForFunction(() => {
          const mermaidDivs = document.querySelectorAll('.mermaid');
          if (mermaidDivs.length === 0) return true;

          // Check if all mermaid divs have rendered SVG content
          for (const div of mermaidDivs) {
            const svg = div.querySelector('svg');
            if (!svg) return false;

            // Check if SVG has actual content (not just text)
            const paths = svg.querySelectorAll('path, rect, circle, ellipse, polygon, polyline, line, g');
            if (paths.length === 0) return false;
          }
          return true;
        }, { timeout: 20000 });

        console.log(`      Mermaid diagrams rendered!`);
      }

      // Additional wait to ensure rendering is complete
      await page.evaluateHandle('document.fonts.ready');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Generate PDF
      await page.pdf({
        path: outputPath,
        format: 'A4',
        margin: {
          top: '20mm',
          right: '15mm',
          bottom: '20mm',
          left: '15mm'
        },
        printBackground: true
      });

      console.log(`   ✅ Created: ${outputFileName}`);
      return true;
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error(`   ❌ Error converting ${fileName}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    console.log('='.repeat(60));
    console.log('📚 Markdown to PDF Converter (with Mermaid wait)');
    console.log('='.repeat(60));
    console.log();

    let successCount = 0;
    let totalCount = 0;

    for (const [folderName, files] of Object.entries(FILES_TO_CONVERT)) {
      const folderPath = path.join('docs', folderName);

      try {
        await fs.access(folderPath);
      } catch {
        console.log(`⚠️  Folder not found: ${folderName}`);
        continue;
      }

      console.log(`📁 Processing: ${folderName}`);

      // Save HTML files for Requirements HRIS and ATS folder for debugging
      const saveHTML = folderName === 'Requirements HRIS and ATS';

      for (const fileName of files) {
        const filePath = path.join(folderPath, fileName);

        try {
          await fs.access(filePath);
        } catch {
          console.log(`   ⚠️  File not found: ${fileName}`);
          continue;
        }

        totalCount++;
        if (await convertFile(folderName, fileName, saveHTML)) {
          successCount++;
        }
      }

      console.log();
    }

    console.log('='.repeat(60));
    console.log(`✅ Conversion complete: ${successCount}/${totalCount} files`);
    console.log('='.repeat(60));

    if (successCount < totalCount) {
      console.log();
      console.log('⚠️  Some files could not be converted.');
      process.exit(1);
    }

    // Create zip with all PDFs
    await createPdfZip();

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

main();
