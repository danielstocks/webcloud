const fs = require("fs");
const glob = require("glob");

const getDateFromFileName = name => {
  const [year, month, day] = name.split("-");
  return `${year}-${month}-${day}`;
};

// Searches the file for the first occurance of a markdown header
const getTitleFromPost = filePath => {
  const file = fs.readFileSync(filePath, "utf-8");
  return file
    .split("\n")
    .find(str => str.match(/^#/g))
    .split("# ")[1];
};

const listPosts = () => {
  return glob
    .sync("./pages/blog/*.md", {})
    .map(path => ({
      path,
      title: path
        .split("/")
        .slice(-1)[0]
        .slice(0, -3)
    }))
    .map(({ path, title }) => ({
      title: getTitleFromPost(path),
      date: getDateFromFileName(title),
      path: `/blog/${title}`
    }))
    .sort((a, b) => b.sortOrder - a.sortOrder);
};

const output = listPosts().reverse();
fs.writeFileSync("./blog-manifest.json", JSON.stringify(output, null, 2));
