package com.swedbank.academy;

import com.swedbank.academy.data.ContactFormDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
        contactFormDataHolder = new ContactFormDataHolder(counter.getAndIncrement(), "Kokia busto paskolos palukanu norma?","Labukas",
                "Vytautas", "Sugintas", "861234567", "test@test.lt");
        contactFormDataHolderList = new ArrayList<>();
        contactFormDataHolderList.add(contactFormDataHolder);
    }

    @RequestMapping(value = "api/contact")
    public ContactFormDataHolder getContactFormJSON(){
        return contactFormDataHolder;
    }

    @RequestMapping(value = "api/getContacsUsInformation")
    public List<ContactFormDataHolder> getAllContactUsInformation() {
        return contactFormDataHolderList;

    }

    //call api/ContactUsRegistration?message=VeikiaJeee&name=Vytautas&surname=Sugintas&number=123&email=pasukutinis@geras.lt

    @RequestMapping(value = "api/ContactUsRegistration")
    public void Register(@RequestParam Map<String, String> requestParams) {
        ContactFormDataHolder registrationDataHolder = new ContactFormDataHolder(counter.getAndIncrement(),
                requestParams.get("subject"),
                requestParams.get("message"),
                requestParams.get("name"),
                requestParams.get("surname"),
                requestParams.get("number"),
                requestParams.get("email"));

        contactFormDataHolderList.add(registrationDataHolder);
    }

    }
