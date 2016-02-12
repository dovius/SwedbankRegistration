package com.swedbank.academy;

import com.swedbank.academy.data.ContactFormDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 11/02/16.  
 */
@RestController
public class ContactUsRestController {

    private final AtomicLong counter = new AtomicLong();

    ContactFormDataHolder testContactFormDataHolder;

    @PostConstruct
    public void init(){
        testContactFormDataHolder = new ContactFormDataHolder(counter.incrementAndGet(), "Kokia busto paskolos palukanu norma?", "Vytautas", "Sugintas", "861234567", "test@test.lt");
    }

    @RequestMapping(value = "api/contact")
    public ContactFormDataHolder getContactFormJSON(){
        return testContactFormDataHolder;
    }



}
