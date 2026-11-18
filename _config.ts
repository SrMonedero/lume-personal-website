import lume from "lume/mod.ts";
import sitemap from "lume/plugins/sitemap.ts";
import robots from "lume/plugins/robots.ts";

const site = lume({
  location: new URL("https://quique.info"),
});

site.add('/styles.css')
// design/index.html is loaded as a page (not a copied asset) so it lands in the sitemap;
// the rest of design/ is copied as-is so the .md files keep their raw URLs.
site.loadPages([".html"])
site.add('design/index.html')
site.copy('design/globals.css')
site.copy('design/DESIGN.md')
site.copy('design/CLAUDE-snippet.md')

site.use(robots());
site.use(sitemap());

export default site;
