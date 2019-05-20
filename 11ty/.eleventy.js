const { DateTime } = require("luxon");

module.exports = function(config) {

  // Layout aliases can make templates more portable
  config.addLayoutAlias('post', 'layouts/base.njk');

  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
});

  config.addShortcode("img", function(url) { return `<figure><img src="${url}" /></figure>`});
  config.addShortcode("image", function(url) { return `<figure><img src="${url}" /></figure>`});
  config.addPairedShortcode("blockquote", function(content, cite, cite2) { return `<blockquote>${content}</blockquote>`});
  config.addPairedShortcode("quote", function(content, cite, cite2) { return `<blockquote>${content}</blockquote>`});
  config.addPairedShortcode("codeblock", function(content) { return `<code>${content}</code>`});
  config.addShortcode("youtube", function (code) { return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${code}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` })
  config.addShortcode("vimeo", function (code) { return `<iframe src="https://player.vimeo.com/video/${code}" width="640" height="401" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>` })
  config.addShortcode("soundcloud", function (url) { return `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>` })
  config.addShortcode("gist", function (url) { return `<script src="${url}"></script>` })
  config.addShortcode("twitter", function (url) { return `<a href="${url}">${url}</a>` })
  config.addShortcode("monthly_post_list", function() { return  '<div></div>' });
  config.addShortcode("yearly_post_list", function() { return  '<div></div>' });

};
