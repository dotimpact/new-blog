#! /usr/bin/env ruby

Dir.glob('./hexo/source/_posts/**/*.md').each do |fn|
  lines = open(fn).readlines
  lines = lines.map{ |l|
    l.gsub!(/^[\s\t]*- (\w+)/i, "   - \\1")
    l.gsub!(/^date: "?([0-9-]+)( \d\d:\d\d(:\d\d)?)"?/, "date: \\1")
    l.gsub!(/^\s*({%\s*(soundcloud|codeblock|twitter|youtube|img|image|quote|blockquote|monthly_post_list|yearly_post_list) )([^"]+)\s*%}/, "\\1\"\\3\" %}")
    l
  }
  out = fn.gsub(/^(.*)\/hexo\/source\/_posts/, "\\1\/11ty/blog")
  File.write(out, lines.join)
  if lines[0] !~ /^---/
    puts out
    File.write(out, (["---\n"] + lines).join)
  else
  end
end