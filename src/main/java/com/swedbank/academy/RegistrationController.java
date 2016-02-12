package com.swedbank.academy;

import com.swedbank.academy.data.RegistrationDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 12/02/16.
 */

@RestController
public class RegistrationController {

    AtomicLong atomicLong = new AtomicLong();

    RegistrationDataHolder registrationDataHolder;

    @PostConstruct
    public void init(){
        registrationDataHolder = new RegistrationDataHolder(atomicLong.getAndIncrement(), "Vytautas", "Sugintas", "860296103", "vytautas@sugintas.com", "Antakalnio g. 45", "2015-02-15", "Pensijos kaupimas", "");
    }

    @RequestMapping(value = "api/registration")
    public RegistrationDataHolder getContanctFormJSON(){
        return registrationDataHolder;
    }


}
