package com.ftn.sbnz.model.model;

import com.ftn.sbnz.model.enums.AuthProvider;
import com.ftn.sbnz.model.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "Users")
public class User implements UserDetails {
    @Id
    @Column(unique = true)
    private String email;
    private String password;
    private String name;
    private String surname;
    private String city;
    private String phoneNumber;
    private Boolean deleted=false;
    @OneToOne
    private UserAuth userAuth;
    private UserRole role;
    private Boolean blocked;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;
    @Override
    public Collection<Role> getAuthorities() {
        return getUserAuth().getRoles();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return getUserAuth().getIsEnabled();
    }

    public User(String email, String name, String surname) {
        this.email = email;
    }
    public User(String email) {
        this.email = email;
    }

    public User(String email, Boolean blocked) {
        this.email = email;
        this.blocked = blocked;
    }
}

