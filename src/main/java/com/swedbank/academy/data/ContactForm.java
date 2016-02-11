package com.swedbank.academy.data;

/**
 * Created by vytautassugintas on 11/02/16.
 */
public class ContactForm {

    long id;
    String message;
    String name;
    String surname;
    String number;
    String email;

    public ContactForm(long id, String message, String name, String surname, String number, String email) {
        this.id = id;

        this.message = message;
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
