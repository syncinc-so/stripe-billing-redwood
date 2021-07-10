export const schema = gql`
  type SetupIntent {
    id: String!
    application_id: String
    cancellation_reason: String
    client_secret: String
    created: DateTime
    customer_id: String
    description: String
    latest_attempt_id: String
    livemode: Boolean
    mandate_id: String
    metadata: JSON
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    payment_method_types: [String]!
    single_use_mandate_id: String
    status: String
    usage: String
    next_action_redirect_to_url: JSON
    next_action_type: String
    next_action_use_stripe_sdk: JSON
    next_action_verify_with_microdeposits: JSON
    payment_method_options_acss_debit: JSON
    payment_method_options_card: JSON
    payment_method_options_sepa_debit: JSON
    last_setup_error_charge: String
    last_setup_error_code: String
    last_setup_error_decline_code: String
    last_setup_error_doc_url: String
    last_setup_error_message: String
    last_setup_error_param: String
    last_setup_error_payment_intent_id: String
    last_setup_error_payment_method_id: String
    last_setup_error_payment_method_type: String
    last_setup_error_setup_intent_id: String
    last_setup_error_source: JSON
    last_setup_error_type: String
    application: Application
    customer: Customer
    payment_intent_payment_intentTosetup_intent_last_setup_error_payment_intent_id: PaymentIntent
    payment_method_payment_methodTosetup_intent_last_setup_error_payment_method_id: PaymentMethod
    setup_intent: SetupIntent
    setup_attempt_setup_attemptTosetup_intent_latest_attempt_id: SetupAttempt
    mandate_mandateTosetup_intent_mandate_id: Mandate
    account: Account
    payment_method_payment_methodTosetup_intent_payment_method_id: PaymentMethod
    mandate_mandateTosetup_intent_single_use_mandate_id: Mandate
    checkout_session: [CheckoutSession]!
    invoice: [Invoice]!
    payment_intent_payment_intent_last_payment_error_setup_intent_idTosetup_intent: [PaymentIntent]!
    setup_attempt_setup_attempt_setup_error_setup_intent_idTosetup_intent: [SetupAttempt]!
    setup_attempt_setup_attempt_setup_intent_idTosetup_intent: [SetupAttempt]!
    other_setup_intent: [SetupIntent]!
    subscription: [Subscription]!
  }

  type Query {
    setupIntents: [SetupIntent!]!
  }

  input CreateSetupIntentInput {
    application_id: String
    cancellation_reason: String
    client_secret: String
    created: DateTime
    customer_id: String
    description: String
    latest_attempt_id: String
    livemode: Boolean
    mandate_id: String
    metadata: JSON
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    payment_method_types: [String]!
    single_use_mandate_id: String
    status: String
    usage: String
    next_action_redirect_to_url: JSON
    next_action_type: String
    next_action_use_stripe_sdk: JSON
    next_action_verify_with_microdeposits: JSON
    payment_method_options_acss_debit: JSON
    payment_method_options_card: JSON
    payment_method_options_sepa_debit: JSON
    last_setup_error_charge: String
    last_setup_error_code: String
    last_setup_error_decline_code: String
    last_setup_error_doc_url: String
    last_setup_error_message: String
    last_setup_error_param: String
    last_setup_error_payment_intent_id: String
    last_setup_error_payment_method_id: String
    last_setup_error_payment_method_type: String
    last_setup_error_setup_intent_id: String
    last_setup_error_source: JSON
    last_setup_error_type: String
  }

  input UpdateSetupIntentInput {
    application_id: String
    cancellation_reason: String
    client_secret: String
    created: DateTime
    customer_id: String
    description: String
    latest_attempt_id: String
    livemode: Boolean
    mandate_id: String
    metadata: JSON
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    payment_method_types: [String]!
    single_use_mandate_id: String
    status: String
    usage: String
    next_action_redirect_to_url: JSON
    next_action_type: String
    next_action_use_stripe_sdk: JSON
    next_action_verify_with_microdeposits: JSON
    payment_method_options_acss_debit: JSON
    payment_method_options_card: JSON
    payment_method_options_sepa_debit: JSON
    last_setup_error_charge: String
    last_setup_error_code: String
    last_setup_error_decline_code: String
    last_setup_error_doc_url: String
    last_setup_error_message: String
    last_setup_error_param: String
    last_setup_error_payment_intent_id: String
    last_setup_error_payment_method_id: String
    last_setup_error_payment_method_type: String
    last_setup_error_setup_intent_id: String
    last_setup_error_source: JSON
    last_setup_error_type: String
  }
`