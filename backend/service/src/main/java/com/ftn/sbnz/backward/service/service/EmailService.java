package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.service.utils.EmailContentUtils;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Objects;

@AllArgsConstructor
@Service
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final Environment env;

    @Async
    public void sendRegistrationAsync(User user) throws MailException, MessagingException {
        System.out.println("Sending email...");
        MimeMessage message = javaMailSender.createMimeMessage();
        message.setSubject("Please verify your registration");
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo("ubernet-test@outlook.com");
        helper.setFrom(Objects.requireNonNull(env.getProperty("spring.mail.username")));
        String content = EmailContentUtils.getVerificationContent();
        String verifyURL = "http://localhost:4200/verify/" + user.getUserAuth().getVerificationCode();
        content = content.replace("[[URL]]", verifyURL);
        helper.setText(content, true);
        javaMailSender.send(message);
        System.out.println("Email sent!");
    }

    @Async
    public void sendEmailResetAsync(User user) throws MailException, MessagingException {
        System.out.println("Sending email...");
        MimeMessage message = javaMailSender.createMimeMessage();
        message.setSubject("Forgot password");
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo("ubernet-test@outlook.com");
        helper.setFrom(Objects.requireNonNull(env.getProperty("spring.mail.username")));
        String content = EmailContentUtils.getResetPasswordContent();
        String verifyURL = "http://localhost:4200/reset-password/" + user.getUserAuth().getResetPasswordCode();
        content = content.replace("[[URL]]", verifyURL);
        helper.setText(content, true);
        javaMailSender.send(message);
        System.out.println("Email sent!");
    }
}
