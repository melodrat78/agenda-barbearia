import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/api/bookings")
public class App {
    private final List<Booking> bookings = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @PostMapping
    public String book(@RequestBody Booking booking) {
        bookings.add(booking);
        return "Agendamento realizado para " + booking.getName();
    }
}

class Booking {
    private String name;
    private String date;
    private String time;

    // Getters e Setters
}
