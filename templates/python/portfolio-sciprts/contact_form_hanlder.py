def handle_contact_form_submission(name, email, message):
    """
    Handles the submission of a contact form.
    - name: Name of the user.
    - email: Email address of the user.
    - message: The message from the user.
    """
    print(f"Received message from {name} ({email}): {message}")
    # Add logic to send an email or save the message to a database
