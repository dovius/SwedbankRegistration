package com.swedbank.academy.data;

/**
 * Created by vytautassugintas on 11/02/16.
 */
public class RegistrationDataHolder {

    long id;
    String name;            // Vardas
    String surname;         // Pavarde
    String number;          // Telefonas susisiekti
    String email;           // El. pastas
    String bank;            // Banko skyrius
    String date;            // Data
    String time;            // Registracijos laikas
    String subject;         // Tema
    String comment;         // Žinutė bankui

    public RegistrationDataHolder(String name, String surname, String number, String email, String bank, String date, String time, String subject, String comment) {
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.email = email;
        this.bank = bank;
        this.date = date;
        this.time = time;
        this.subject = subject;
        this.comment = comment;
    }

    public RegistrationDataHolder(long id, String name, String surname, String number, String email, String bank, String date, String time, String subject, String comment) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.email = email;
        this.bank = bank;
        this.date = date;
        this.time = time;
        this.subject = subject;
        this.comment = comment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
