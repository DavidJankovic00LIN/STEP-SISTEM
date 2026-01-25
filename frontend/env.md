# Environment Variables Configuration

Kreirati `.env` fajl u `frontend` direktorijumu sa sledećim varijablama:

```env
# Web3Forms Access Key
# Dobijate ga na https://web3forms.com nakon registracije
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

# Email adresa na koju će stizati poruke sa kontakt forme
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
```

## Uputstvo

1. Kreirajte `.env` fajl u `frontend` direktorijumu
2. Kopirajte gornje varijable u fajl
3. Zamenite `your_web3forms_access_key_here` sa vašim stvarnim Web3Forms access key-om
4. Zamenite `your_email@example.com` sa email adresom na koju želite da primate poruke

**Napomena:** `.env` fajl je već u `.gitignore` i neće biti commit-ovan u git repozitorijum.
