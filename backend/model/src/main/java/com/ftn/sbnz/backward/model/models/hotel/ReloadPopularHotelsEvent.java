package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.kie.api.definition.type.Role;

import java.io.Serializable;
import java.util.List;

@Role(Role.Type.EVENT)
@Getter
@Setter
@AllArgsConstructor
public class ReloadPopularHotelsEvent implements Serializable {
    private List<Hotel> hotels;
}
