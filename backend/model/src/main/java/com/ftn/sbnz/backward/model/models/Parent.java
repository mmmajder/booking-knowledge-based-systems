package com.ftn.sbnz.backward.model.models;

import org.kie.api.definition.type.Position;

public class Parent {

    @Position(0)
    private String parent;

    @Position(1)
    private String child;

    public Parent(String parent, String child) {
        this.parent = parent;
        this.child = child;
    }

    public Parent() {
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }
}
