---
pagination:
    data: articles
    size: 1
    alias: node
permalink: "{{ node.alias }}/"
---
This uses the `defaul.njk` layout.
It depends on `page-article.11tydata.js` to get the title
Submitted by *{{ author.display_name }}* on *{{ node.changed }}*

<img src={{ image.url }} alt={{ image.alt }} class="img-fluid">

<div>{{ node.body | safe }}</div>

---

