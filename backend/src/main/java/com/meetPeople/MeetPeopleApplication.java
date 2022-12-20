package com.meetPeople;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class MeetPeopleApplication  {

	public static void main(String[] args) {
		SpringApplication.run(MeetPeopleApplication.class, args);
	}


}
