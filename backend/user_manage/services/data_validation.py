valid_email_endings = [
    ".com",
    ".com.br",
    ".org",
    ".org.br",
    ".org.com",
    ".gov",
    ".gov.br",
    ".gov.com",
    ".net",
    ".net.br",
    ".net.com"
]

def email_validation(email):
    
    if "@" not in email:
        raise ValueError("The email must have a @ character")
    if email.startswith("@"):
        raise ValueError("The email must have a valid domain")
    if email.endswith("@"):
        raise ValueError("The email must have a valid domain")
    if email.count("@") != 1:
        raise ValueError("The email must have a valid domain")
    if "." not in email:
        raise ValueError("The email must have a '.' character")
    if email.startswith("."):
        raise ValueError("The email must have a valid domain")
    if email.endswith("."):
        raise ValueError("The email must have a valid domain")

    username, domain = email.split("@")
    if not any(domain.endswith(ending) for ending in valid_email_endings):
        
        raise ValueError("The email domain is not valid")

    return True
