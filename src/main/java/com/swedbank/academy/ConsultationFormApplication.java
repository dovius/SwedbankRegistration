package com.swedbank.academy;

import com.swedbank.academy.data.ConnectToDB;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ConsultationFormApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConsultationFormApplication.class, args);
        ConnectToDB connectToDB = new ConnectToDB();
        connectToDB.connectWithContext();
    }

}
