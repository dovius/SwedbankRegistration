package com.swedbank.academy;

import com.swedbank.academy.data.ConnectToDB;
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
    ConnectToDB MySQLconnection = new ConnectToDB();

    @PostConstruct
    public void init() {
        MySQLconnection.addNewRegistration(new RegistrationDataHolder("Vytautas",
                "Sugintas", "860296103", "vytautas@sugintas.com", "Antakalnio g. 45", "2015-02-15", "15.25", "Pensijos kaupimas", ""));
        testRegistrationDataHolder1 = new RegistrationDataHolder(atomicLong.getAndIncrement(), "Rytis",
                "Dereškevičius", "866699959", "rdereskevicius@gmail.com", "Mokyklos g. 18", "2015-02-28", "14:10", "Draudimas", "");
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
        return MySQLconnection.getAllRegistrations();
    }

    // call api/register?name=Vytautas&surname=Sugintas&number=123&email=vyc@vyc.lt&bank=qq&date=2015&time=14.10&subject=paskola&comment=cool
    @RequestMapping(value = "api/register")
    public void Register(@RequestParam Map<String, String> requestParams) {
        RegistrationDataHolder registrationDataHolder = new RegistrationDataHolder(atomicLong.getAndIncrement(),
                requestParams.get("name"),
                requestParams.get("surname"),
                requestParams.get("number"),
                requestParams.get("email"),
                requestParams.get("bank"),
                requestParams.get("date"),
                requestParams.get("time"),
                requestParams.get("subject"),
                requestParams.get("comment"));
        registrationDataHolderList.add(registrationDataHolder);
        MySQLconnection.addOnlyName(registrationDataHolder);
        MySQLconnection.addNewRegistration(registrationDataHolder);
    }

    @RequestMapping(value = "api/dbNames")
    public List<String> returnNamesFromDb(){
        return MySQLconnection.returnNamesOfCustomers();
    }
}
