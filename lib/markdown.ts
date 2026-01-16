const formatInlineMarkdown = (text: string): string => {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
};

export const renderMarkdown = (markdown: string): string => {
  const lines = markdown.split("\n");
  let html = "";
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      html += "</ul>";
      inUnorderedList = false;
    }
    if (inOrderedList) {
      html += "</ol>";
      inOrderedList = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      closeLists();
      html += `<h2>${formatInlineMarkdown(line.replace("## ", "").trim())}</h2>`;
      continue;
    }

    if (line.startsWith("# ")) {
      closeLists();
      html += `<h1>${formatInlineMarkdown(line.replace("# ", "").trim())}</h1>`;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      if (!inOrderedList) {
        closeLists();
        html += "<ol>";
        inOrderedList = true;
      }
      html += `<li>${formatInlineMarkdown(line.replace(/^\d+\.\s/, ""))}</li>`;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inUnorderedList) {
        closeLists();
        html += "<ul>";
        inUnorderedList = true;
      }
      html += `<li>${formatInlineMarkdown(line.replace("- ", ""))}</li>`;
      continue;
    }

    if (line.trim() === "") {
      closeLists();
      continue;
    }

    closeLists();
    html += `<p>${formatInlineMarkdown(line)}</p>`;
  }

  closeLists();
  return html;
};
