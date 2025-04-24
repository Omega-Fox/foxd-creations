def process_checkout(cart_items, payment_info):
    """
    Processes ecommerce checkout.
    - cart_items: List of items to purchase.
    - payment_info: Payment details (e.g., credit card).
    """
    total = sum(item['price'] for item in cart_items)
    print(f"Total amount: ${total}")
    # Add payment processing logic here
    return "Checkout complete!"
