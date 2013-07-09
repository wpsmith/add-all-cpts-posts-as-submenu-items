# Add All CPT Posts As Submenu Items #
**Contributors:** wpsmith  
**Tags:** menu, nav menu, children, descendants  
**Tested up to:** 3.5  
**Stable tag:** 1.2.0  

Automatically add all of a custom post type's posts as submenu items.

## Description ##

When adding a page, category, or any hierarchical custom post type or taxonomy to your navigation menu (Appearance &rarr; Menus), this plugin allows you to optionally automatically add all of a custom post type's posts as submenu items.

In short, you'll no longer have to manually maintain submenus when you add a new child page to your site.

Built off of Viper007Bond's Add Descendants As Submenu Items.

## Installation ##

Visit Plugins &rarr; Add New in your administration area and search for the name of this plugin.

## Screenshots ##

###1. The new checkbox that this plugin adds###
![The new checkbox that this plugin adds](http://s.wordpress.org/extend/plugins/add-all-cpt-posts-as-submenu-items/screenshot-1.png)

###2. The child pages have automatically been added as submenu items###
![The child pages have automatically been added as submenu items](http://s.wordpress.org/extend/plugins/add-all-cpt-posts-as-submenu-items/screenshot-2.png)


## ChangeLog ##

### Version 1.2.0 ###
* `_get_post_ancestors()` will/was deprecated in WordPress 3.5 and no longer works. Parts of this plugin have been rewritten to more properly get post ancestors.
*** Bug fix:** Don't highlight parents of different types. Post types and terms can have the same IDs.  

### Version 1.1.0 ###
* Support for hierarchical taxonomies (i.e. categories). Props WPAddiction for the idea.
* Translatable plugin headers.

### Version 1.0.1 ###
* Fix sorting by secondarily sorting by title.

### Version 1.0.0 ###
* Initial release!

## Upgrade Notice ##

### 1.1.0 ###
Various bug fixes.