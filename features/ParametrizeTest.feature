
Feature: Ecommerce Validations
    Scenario Outline: Check Order gets selected and displayed in the cart
        Given LOgin into the Ecommerce application with "<email>" and "<password>"
        When Add the item "zara coat 3" in to cart
        Then verify that "zara coat 3" is displayed in the cart.
        # When Enter valid details and place the order
        # Then verify the order is displayed in the order history page.

        Examples:
            | email                  | password    |
            | suyashguha04@gmail.com | Strong@1234 |
            | abdsuyash@gmail.com    | Strong@1234 |
