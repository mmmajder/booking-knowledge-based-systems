package com.ftn.sbnz.backward.model.models.hotel;

import lombok.Getter;
import lombok.Setter;
import org.kie.api.definition.type.Role;

import java.io.Serializable;
import java.util.List;

@Role(Role.Type.EVENT)
@Getter
@Setter
public class ReloadPopularHotelsEvent implements Serializable {
    private List<Hotel> hotels;
}
