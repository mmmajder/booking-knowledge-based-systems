package com.ftn.sbnz.service.utils;


import com.ftn.sbnz.service.exception.BadRequestException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class TimeUtils {
    private static final DateTimeFormatter format = DateTimeFormatter.ofPattern("MM/dd/yyyy");

    public static LocalDateTime getDateTimeForReservationMaxFiveHoursMin15MinutesAdvance(String time) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime selectedTime = getSelectedTime(time, now);
        if (selectedTime.isAfter(now.plusHours(5))) {
            throw new BadRequestException("Reservation can be maximum 5 hours in advance");
        }
        if (selectedTime.isBefore(now.plusMinutes(15))) {
            throw new BadRequestException("Reservation can be minimum 15 minutes in advance");
        }
        return selectedTime;
    }

    private static LocalDateTime getSelectedTime(String time, LocalDateTime now) {
        boolean isMorning = time.split("\\s+")[1].equals("AM");
        int hours = Integer.parseInt(time.split(":")[0]);
        if (!isMorning) {
            if (hours != 12)
                hours += 12;
        } else if (hours == 12) {
            hours = 0;
        }
        int minutes = Integer.parseInt(time.split("\\s+")[0].split(":")[1]);

        LocalDateTime selectedTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), hours, minutes, 0);
        if (selectedTime.isBefore(now)) {
            selectedTime = selectedTime.plusDays(1);
        }
        return selectedTime;
    }

    public static LocalDateTime getStartOfTheDay(String date) {
        return LocalDate.parse(date, format).atStartOfDay();
    }

    public static LocalDateTime getEndOfTheDay(String date) {
        return LocalDate.parse(date, format).atTime(LocalTime.MAX);
    }
}
