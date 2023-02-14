import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class exempleHashage {

    public static void main(String[] args) throws NoSuchAlgorithmException {
        String str = "1234";
        System.out.println(str);
        String crypter = crypterMotDePasse(str);
        System.out.println(crypter);
        String sel = genererSel();
        System.out.println(sel);
        String crypterSaler = crypterMotDePasse(str+sel);
        System.out.println(crypterSaler);
        String crypter2 = crypterMotDePasse(str);
        System.out.println(crypter2);
    }

    /**
     * Generer une chaine aleatoire comprise entre 50 et 100 caractères
     * @return la châine de caractère aléatoire
     */
    private static String genererSel() {
        int n = 50 + ((int) (Math.random() * 50));
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "abcdefghijklmnopqrstuvxyz123456789&*/-+";

        StringBuilder s = new StringBuilder(n);

        for (int i = 0; i < n; i++) {
            int index = (int)(str.length() * Math.random());
            s.append(str.charAt(index));
        }
        return s.toString();
    }

    private static String crypterMotDePasse(String mdpClair){
        String res = "";
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(mdpClair.getBytes());
            byte[] digest = md.digest();
            res = new BigInteger(1, digest).toString(16).toUpperCase();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        return res;
    }
}
