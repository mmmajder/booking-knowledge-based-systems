package com.ftn.sbnz.service.utils;

import com.ftn.sbnz.model.model.Admin;
import com.ftn.sbnz.model.model.Customer;
import com.ftn.sbnz.model.model.User;

public class EntityMapper {
    public static Admin mapToAdmin(User user) {
        Admin admin = new Admin();
        admin.setCity(user.getCity());
        admin.setDeleted(user.getDeleted());
        admin.setUserAuth(user.getUserAuth());
        admin.setPassword(user.getPassword());
        admin.setEmail(user.getEmail());
        admin.setBlocked(user.getBlocked());
        admin.setPhoneNumber(user.getPhoneNumber());
        admin.setName(user.getName());
        admin.setSurname(user.getSurname());
        admin.setRole(user.getRole());
        return admin;
    }

    public static Customer mapToCustomer(User user) {
        Customer customer = new Customer();
        customer.setPassword(user.getPassword());
        customer.setCity(user.getCity());
        customer.setName(user.getName());
        customer.setPhoneNumber(user.getPhoneNumber());
        customer.setDeleted(user.getDeleted());
        customer.setSurname(user.getSurname());
        customer.setEmail(user.getEmail());
        customer.setUserAuth(user.getUserAuth());
        customer.setRole(user.getRole());
        customer.setBlocked(user.getBlocked());
        return customer;
    }

}
