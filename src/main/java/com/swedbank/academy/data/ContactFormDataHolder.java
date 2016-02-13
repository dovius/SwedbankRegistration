package com.swedbank.academy.data;

/**
 * Created by vytautassugintas on 11/02/16.
 */
public class ContactFormDataHolder {

    long id;
    String message;     // Žinutė
    String name;        // Vardas
    String surname;     // Pavardė
    String number;      // Telefonas
    String email;       // El.paštas
    String subject;     // Tema

    public ContactFormDataHolder(long id, String subject, String message, String name, String surname, String number, String email) {
        this.id = id;
        this.subject = subject;
        this.message = message;
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
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
