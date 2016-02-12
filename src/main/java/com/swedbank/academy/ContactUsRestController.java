package com.swedbank.academy;

import com.swedbank.academy.data.ContactFormDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 11/02/16.  
 */
@RestController
public class ContactUsRestController {

    private final AtomicLong counter = new AtomicLong();
    ContactFormDataHolder contactFormDataHolder;
    List<ContactFormDataHolder> contactFormDataHolderList;


    @PostConstruct
    public void init(){
        contactFormDataHolder = new ContactFormDataHolder(counter.incrementAndGet(), "Kokia busto paskolos palukanu norma?",
                "Vytautas", "Sugintas", "861234567", "test@test.lt");
        contactFormDataHolderList = new ArrayList<>();
        contactFormDataHolderList.add(contactFormDataHolder);
    }

    @RequestMapping(value = "api/contact")
    public ContactFormDataHolder getContactFormJSON(){
        return contactFormDataHolder;
    }

    @RequestMapping(value = "api/getRegistrationInformation")
    public List<ContactFormDataHolder> getAllContactUsInformation() {
        return contactFormDataHolderList;

    }


    }
