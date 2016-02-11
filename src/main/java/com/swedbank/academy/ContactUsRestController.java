package com.swedbank.academy;

import com.swedbank.academy.data.ContactForm;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 11/02/16.
 */

@RestController
public class ContactUsRestController {

    // AtomicLong will automatically increase id with incrementAndGet()
    private final AtomicLong counter = new AtomicLong();

    ContactForm testContactForm;

    @PostConstruct
    public void init(){
        testContactForm = new ContactForm(counter.incrementAndGet(), "Kokia busto paskolos palukanu norma?", "Vytautas", "Sugintas", "861234567", "test@test.lt");
    }

    @RequestMapping(value = "api/contact")
    public ContactForm getContanctFormJSON(){
        return testContactForm;
    }

}
