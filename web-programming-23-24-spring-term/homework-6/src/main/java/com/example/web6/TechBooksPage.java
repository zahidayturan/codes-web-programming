package com.example.web6;

public class TechBooksPage extends CatalogPage {
    public void init() {
        String[] ids = { "hall001", "hall002" };
        setItems(ids);
        setTitle("All-Time Best Computer Books");
    }
}