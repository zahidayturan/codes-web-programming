# ÖDEV-6

## localhost:8080

Session Kullanımı

"An Online Store with a Shopping Cart and Session Tracking"  örneğini kendiniz kodlayarak gerçekleştiriniz.

An Online Store with a Shopping
Cart and Session Tracking

This section gives an extended example of how you might build an online store that
uses session tracking. The first subsection shows how to build pages that display
items for sale. The code for each display page simply lists the page title and the iden-
tifiers of the items listed on the page. The actual page is then built automatically by 
methods in the parent class, based on item descriptions stored in the catalog. The
second subsection shows the page that handles the orders. It uses session tracking to
associate a shopping cart with each user and permits the user to modify orders for
any previously selected item. The third subsection presents the implementation of
the shopping cart, the data structures representing individual items and orders, and
the catalog.