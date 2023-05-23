package util;

import java.util.Random;

import static config.TestConfig.USER_COUNT;

public class TestUtil {

    public static String generateUsername(){
        Random random = new Random();
        return String.format("tip%s",random.nextInt(USER_COUNT));
    }
}
