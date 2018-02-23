
## Language Ruby on Rails ##
---
- Author: bjelli
- Date: 08/15/09
- Info: http
- Score:  (2.78 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-on-rails-2160.html
---

```# Ruby on Rails is a Framework for Web Applications.
# it follows the model - view - controller pattern. 
# One Application has to consist of several files
#
# You can find the whole source on github:
# http://github.com/bjelline/bottle/tree/master
# and test the application on heroku
# http://bottles.heroku.com/

------------------ config/routes.rb -------------------
# in this file the mapping from URL to controller is defined

ActionController::Routing::Routes.draw do |map|
  map.root :controller => "wall"
  map.resources :wall, :singular => :wall_instance
end

------------------ app/controller/wall.rb -------------------
class WallController < ApplicationController
  def show
    @i = params[:id].to_i
  end
end

------------------ app/views/wall/index.html.erb -------------
<p><%= link_to "Sing the song", :controller => :wall, :action => :show, :id => 99 %></p>

------------------ app/views/wall/show.html.erb -------------
<% 
  while @i > 0 do
%>
<p> 
    <%= say_bottles(@i) %> of beer on the wall,
    <%= say_bottles(@i) %> of beer.
    <br />


    <%     
	@i = @i - 1  
    %>

    Take one down and pass it around, 
    <%= say_bottles(@i) %> of beer on the wall.
</p>
<%
   end
%>

 <p>No more bottles of beer on the wall, no more bottles of beer.  <br />
 Go to the store and buy some more, 99 bottles of beer on the wall.</p>

------------------ app/helpers/wall/application_helper.rb -------------
module ApplicationHelper
  
  def say_bottles( count ) 
    case @i  
      when 0 
	"No more bottles"
      when  1
	"One bottle"
      else 
	"#{count}  bottles"
    end
  end

end```