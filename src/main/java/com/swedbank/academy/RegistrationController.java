package com.swedbank.academy;

import com.swedbank.academy.data.RegistrationDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 12/02/16.
 */

@RestController
public class RegistrationController {

    AtomicLong atomicLong = new AtomicLong();
    RegistrationDataHolder testRegistrationDataHolder;
    RegistrationDataHolder testRegistrationDataHolder1;
    List<RegistrationDataHolder> registrationDataHolderList;

    @PostConstruct
    public void init() {
        testRegistrationDataHolder = new RegistrationDataHolder(atomicLong.getAndIncrement(), "Vytautas",
                "Sugintas", "860296103", "vytautas@sugintas.com", "Antakalnio g. 45", "2015-02-15", "Pensijos kaupimas", "");
        testRegistrationDataHolder1 = new RegistrationDataHolder(atomicLong.getAndIncrement(), "Rytis",
                "Dereškevičius", "866699959", "rdereskevicius@gmail.com", "Mokyklos g. 18", "2015-02-28", "Draudimas", "");
        registrationDataHolderList = new ArrayList<>();
        registrationDataHolderList.add(testRegistrationDataHolder);
        registrationDataHolderList.add(testRegistrationDataHolder1);
    }

    @RequestMapping(value = "api/registration")
    public RegistrationDataHolder getContanctFormJSON() {
        return testRegistrationDataHolder;
    }

    @RequestMapping(value = "api/getRegistrationInformation", method = RequestMethod.GET)
    public List<RegistrationDataHolder> getAllRegistrations() {
        return registrationDataHolderList;
    }

    // call api/register?name=Vytautas&surname=Sugintas&number=123&email=vyc@vyc.lt&bank=qq&date=2015&subject=paskola&comment=cool
    @RequestMapping(value = "api/register")
    public void Register(@RequestParam Map<String, String> requestParams) {
        RegistrationDataHolder registrationDataHolder = new RegistrationDataHolder(atomicLong.getAndIncrement(),
                requestParams.get("name"),
                requestParams.get("surname"),
                requestParams.get("number"),
                requestParams.get("email"),
                requestParams.get("bank"),
                requestParams.get("date"),
                requestParams.get("subject"),
                requestParams.get("comment"));
        registrationDataHolderList.add(registrationDataHolder);
    }
}
