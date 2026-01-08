import lume from "lume/mod.ts";

const site = lume();

site.add('/styles.css')
site.copy(".nojekyll");

export default site;
