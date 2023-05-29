package com.ftn.sbnz.backward.model.models.hotel;

import java.util.Map;

public class HotelUtils {

    public static Map<ServiceTypes, Double> SERVICE_PRICE = Map.of(
            ServiceTypes.BED_AND_BREAKFAST, 5.0,
            ServiceTypes.HALF_BOARD, 10.0,
            ServiceTypes.FULL_BOARD, 15.0,
            ServiceTypes.ALL_INCLUSIVE, 20.0
    );

    public static Map<RoomType, Double> ROOM_PRICE = Map.of(
            RoomType.SINGLE, 15.0,
            RoomType.DOUBLE, 20.0,
            RoomType.TRIPLE, 25.0,
            RoomType.APARTMENT, 30.0
    );

    public static Double getPrice(String serviceType) {
        return SERVICE_PRICE.get(ServiceTypes.valueOf(serviceType));
    }

    public Double getRoomPrice(RoomType roomType) {
        return ROOM_PRICE.get(roomType);
    }
}
