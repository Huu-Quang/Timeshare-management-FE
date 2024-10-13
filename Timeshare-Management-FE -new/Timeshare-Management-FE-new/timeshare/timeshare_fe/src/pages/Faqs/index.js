import "./faq.css";
function FAQsPage() {
  return (
    <div className="row" style={{ padding: "3%" }}>
      <div className="small-12 columns main-well main-well-large">
        <h1 className="display small">Frequently Asked Questions</h1>
        <p>
          Here are some of the most frequently asked questions received by our
          customer service team. If your question wasn't answered here, please{" "}
          <a href="/contact-us" title="Contact RedWeek.com customer service">
            contact us
          </a>
          .
        </p>

        <div id="topfaq" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Our Most Asked FAQ</h2>
          <dl>
            <dt id="posting">
              <h4>How do I add a rental or resale posting?</h4>
            </dt>
            <dd>
              <p>
                {" "}
                Simply select{" "}
                <a href="/rent-or-sell-my-timeshare">
                  "Rent or Sell My Timeshare"
                </a>{" "}
                from the top of any page, choose either{" "}
                <a href="/rent-my-timeshare">"Rent My Timeshare"</a> or{" "}
                <a href="/sell-my-timeshare">"Sell My Timeshare"</a>, and enter
                your point system or resort name to get started.
              </p>{" "}
            </dd>
            <dt id="pricing">
              <h4>What is the cost of membership and postings?</h4>
            </dt>
            <dd>
              <p>
                {" "}
                Membership is currently $18.99 for 12 months and is required to
                add a rental or resale, or to contact an owner about a posting.
                Rental postings are $39.99 for 6 months, and resale postings are
                $59.99 for 12 months. We also have full-service options, for an
                additional cost. A full list of pricing and benefits can be
                found on our{" "}
                <a
                  href="/pricing-and-details"
                  title="View all RedWeek.com pricing"
                >
                  pricing and details
                </a>{" "}
                page.
              </p>{" "}
            </dd>
            <dt id="search">
              <h4>How do I find a timeshare for rent or sale?</h4>
            </dt>
            <dd>
              <p>
                The easiest way to view units available is to{" "}
                <a
                  href="/browse/timeshares"
                  title="Browse timeshares by location"
                >
                  browse by location
                </a>
                , or{" "}
                <a href="/search" title="Search for a timeshare">
                  conduct a search
                </a>{" "}
                where you can filter results based on your needs.
              </p>
              <p>
                If you would like to be notified as new postings are added,
                first browse to the specific resorts you are interested in, then
                select "Sign up for alerts" in the resort's rental and resale
                sections.
              </p>{" "}
            </dd>
            <dt id="contact-owner">
              <h4>How do I contact an owner?</h4>
            </dt>
            <dd>
              <p>
                You can make contact with an owner about a rental or resale
                offering from their posting page, which you can easily get to
                from any resort page. In some cases, the owner has contracted
                with RedWeek's full-service team to manage their inquiries. If
                you are not already a member, you will be asked to upgrade your
                account in order to make the contact. Membership will also give
                you access to the Details section of the postings, with
                additional information from the owner, as well as resort reviews
                to help you make your decision.
              </p>
              <p>
                If you are unable to connect with the owner to arrange a
                transaction, please{" "}
                <a href="/contact-us">let us know within 30 days</a>, and we
                would be happy to fully refund your membership fee.
              </p>{" "}
            </dd>
            <dt id="remove">
              <h4>How do I remove items from my cart?</h4>
            </dt>
            <dd>
              <p>
                To remove items from your cart,{" "}
                <a
                  href="https://www.redweek.com/signin"
                  title="Sign in to your RedWeek.com account"
                >
                  sign in
                </a>{" "}
                to your account and click on the "Cart" link on the top right of
                any page. Once you are in your cart, identify the item(s) you
                wish to remove and select the "Delete" link directly next to
                that item.
              </p>{" "}
            </dd>
            <dt id="change-email-password">
              <h4>How do I change my email address or password?</h4>
            </dt>
            <dd>
              <p>
                You can update your email address, contact info, or password by
                visiting <a href="/account">My Account</a>, on the top right any
                page. When you manage your account, you will see the option to{" "}
                <a href="/account/profile">"Edit your profile"</a>. Be sure to
                select "Save Changes" when you're done.
              </p>{" "}
            </dd>
            <dt id="password">
              <h4>What to do if I've forgotten my password?</h4>
            </dt>
            <dd>
              <p>
                If you've lost or forgotten your RedWeek password, simply go to
                the{" "}
                <a
                  href="https://www.redweek.com/signin"
                  title="Sign into your account"
                >
                  sign in
                </a>{" "}
                page and click on the "Forgot Password?" link next to the
                password field. By entering the email address associated with
                your RedWeek account, you will be sent an email with
                instructions on how to reset your password.
              </p>
              <p>
                If you wish to change your password to something easier to
                remember, please sign in to your account, click "My Account"
                from the top of any page, and choose "Profile &amp; Password"
                under the "Account Details" section to enter a new password of
                your choice.
              </p>{" "}
            </dd>
            <dt id="agreement">
              <h4>Do you have a rental agreement?</h4>
            </dt>
            <dd>
              <p>
                Yes - our primary{" "}
                <a href="/resources/rental-process/sample-rental-agreement">
                  recommended rental agreement
                </a>{" "}
                is the one that is only available with the use of our
                easy-to-use{" "}
                <a href="/resources/faq/redweek-online-booking">
                  online booking system
                </a>
                . Your renter will agree to these terms online when submitting
                their booking request. If you choose not to use our online
                booking, we highly recommend having some kind of written and
                signed rental agreement.
              </p>{" "}
            </dd>
            <dt id="verified">
              <h4>What is RedWeek Verified or Verified &amp; Protected?</h4>
            </dt>
            <dd>
              <p>
                The RedWeek Verified flag means we have independently confirmed
                key details of the posting so you can feel confident in your
                transaction. Everything you see in the green RedWeek Verified
                box on a posting page has been professionally verified. Verified
                &amp; Protected means that the posting has been verified, and it
                also offers secure online booking. For full details, please see
                our{" "}
                <a href="/resources/faq/redweek-verified">
                  full RedWeek Verified FAQ
                </a>
              </p>{" "}
            </dd>
          </dl>
        </div>

        <div id="rentingandbuying" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Renting or Buying a Timeshare</h2>
          <dl>
            <dt id="inquiries">
              <h4>How do I inquire about a posting?</h4>
            </dt>
            <dd>
              <p>
                You will need to contact the owner of the posting directly. You
                can send an email inquiry by choosing the "Ask a question"
                option on any posting page. Membership is required, but if you
                are unable to complete the transaction, please{" "}
                <a href="/contact-us">contact us</a> within 30 days for a full
                refund of your membership fee.
              </p>{" "}
            </dd>
            <dt id="unavailable">
              <h4>What if the week I want is not available?</h4>
            </dt>
            <dd>
              <p>
                On RedWeek.com, timeshare owners post their own weeks for rent
                or sale, so we do not have any inventory other than what you see
                posted. You can request notification when new postings are added
                by clicking "Sign up for alerts" in the rental and resale
                sections of any resort page.
              </p>{" "}
            </dd>
            <dt id="rental-transactions">
              <h4>How do I complete a rental transaction?</h4>
            </dt>
            <dd>
              <p>
                Just submit a "Booking Request" to start the process. If the
                owner of the posting uses{" "}
                <a href="/resources/faq/redweek-online-booking">
                  RedWeek's secure online booking system
                </a>
                , your Booking Request will require you agree to the contract
                and submit your credit card for payment -- it will be confirmed
                for you within about 5 days. If the rental you are interested in
                doesn't offer online booking, the owner should provide you with
                further instructions.
              </p>{" "}
            </dd>
            <dt id="search-amenities">
              <h4>Can I search by unit type or amenities?</h4>
            </dt>
            <dd>
              <p>
                We do offer a{" "}
                <a href="/search" title="Search for a timeshare resort">
                  search
                </a>{" "}
                by location, resort name, or brand, with additional filters on
                the results page for unit type, price, and dates. You can also
                browse resorts by{" "}
                <a
                  href="/browse/timeshares"
                  title="Browse timeshares by geographic location"
                >
                  location
                </a>
                ,{" "}
                <a
                  href="/timeshare-companies"
                  title="Browse timeshares by developer"
                >
                  timeshare company
                </a>{" "}
                affiliation, or major{" "}
                <a
                  href="/timeshare-attractions"
                  title="Browse timeshares by specific attraction"
                >
                  attraction
                </a>{" "}
                (
                <a
                  href="/timeshare-attractions/beach"
                  title="View timeshares near beaches"
                >
                  beaches
                </a>
                ,{" "}
                <a
                  href="/timeshare-attractions/casino"
                  title="View timeshares near casinos"
                >
                  casinos
                </a>
                ,{" "}
                <a
                  href="/timeshare-attractions/golf"
                  title="View timeshares near golfing"
                >
                  golf
                </a>
                ,{" "}
                <a
                  href="/timeshare-attractions/theme-park"
                  title="View timeshares near theme parks"
                >
                  theme parks
                </a>
                , and{" "}
                <a
                  href="/timeshare-attractions/pets-allowed"
                  title="View pet-friendly timeshares"
                >
                  resorts that accept pets
                </a>
                ).
              </p>{" "}
            </dd>
            <dt id="posting-number">
              <h4>
                How do I find a rental or resale if I already know the posting
                number?
              </h4>
            </dt>
            <dd>
              <p>
                If you know the posting number, beginning with the letter R,
                type it into your browser at the end of the following URL:
                http://www.redweek.com/posting/
              </p>{" "}
            </dd>
            <dt id="delay">
              <h4>How long does it take for a response to an inquiry?</h4>
            </dt>
            <dd>
              <p>
                On RedWeek.com you almost always deal with an individual
                timeshare owner, rather than the resort's management or an
                automated reservation system. Most timeshare owners have jobs,
                families, and take their own vacations, all of which may cause a
                delay in response time. We typically ask that you give every
                owner one week to reply. If you have not received a response
                after one week, please{" "}
                <a
                  href="/contact-us"
                  title="Contact RedWeek.com customer service"
                >
                  send us
                </a>{" "}
                the posting numbers you have inquired about so we can follow up.
              </p>{" "}
            </dd>
            <dt id="nightly">
              <h4>Are nightly rentals available?</h4>
            </dt>
            <dd>
              <p>
                The majority of the rentals on RedWeek.com are posted directly
                by timeshare owners who have purchased a weekly interval. Since
                they must pay maintenance fees to use this week every year,
                nightly rentals are not often an ideal option. However, if you
                are willing to pay the full weekly rental price, staying for a
                shorter interval should not be a problem. Please contact the
                posting member directly to make such arrangements.
              </p>{" "}
            </dd>
            <dt id="currency">
              <h4>What currency is used for posted prices?</h4>
            </dt>
            <dd>
              <p>
                We ask our members to post all prices in $USD, but you should
                always double check when making an inquiry.
              </p>{" "}
            </dd>
          </dl>
        </div>

        <div id="addingpostings" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Adding Timeshare Postings</h2>
          <dl>
            <dt id="renting">
              <h4>How do I rent my timeshare?</h4>
            </dt>
            <dd>
              <p>
                It's easy - just visit our{" "}
                <a href="/rent-my-timeshare">Rent My Timeshare</a> page to
                review your options — from the basic{" "}
                <a href="/rent-my-timeshare/diy">do-it-yourself rental</a>, to
                our{" "}
                <a href="/rent-my-timeshare/full-service">
                  full-service rental
                </a>{" "}
                option where RedWeek helps with adding your posting, managing
                inquiries, and finalizing the transaction.
              </p>
              <p>
                With the DIY option, you have the choice to use{" "}
                <a href="/resources/faq/redweek-online-booking">
                  RedWeek's online booking system
                </a>
                , which includes a rental agreement and online credit card
                handling. If you don't use RedWeek's system, renters will
                contact you directly to work out the details.
              </p>{" "}
            </dd>
            <dt id="sell">
              <h4>How do I sell my timeshare?</h4>
            </dt>
            <dd>
              <p>
                You have a couple of options for selling your timeshare on
                RedWeek. Start on our{" "}
                <a href="/sell-my-timeshare">Sell My Timeshare</a> page to
                choose the option that works best for you.
              </p>{" "}
            </dd>
            <dt id="rent-sell-cost">
              <h4>How much does it cost to rent or sell my timeshare?</h4>
            </dt>
            <dd>
              <p>
                Postings can be added to your resort's page at a cost of $39.99
                for each 6-month rental posting, and $59.99 for each 12-month
                resale posting. We also have{" "}
                <a href="/rent-my-timeshare/full-service">
                  full-service rental
                </a>{" "}
                and{" "}
                <a href="/sell-my-timeshare/full-service">
                  full-service resale
                </a>{" "}
                options available for a few dollars more. An active membership
                is required in order to post - just $18.99 for 12 months.
              </p>{" "}
            </dd>
            <dt id="edit">
              <h4>How do I edit my posting?</h4>
            </dt>
            <dd>
              <p>
                If you chose the DIY posting option, you can view and edit your
                postings in your <a href="/account/postings">Account</a>. You
                can also edit your posting using the links at the top of your
                posting page. Keep in mind, if your posting has been "
                <a href="/resources/faq/redweek-verified">RedWeek Verified</a>",
                you can edit the price and descriptions, but changing key
                details will require a new verification.
              </p>
              <p>
                For full-service postings, please contact your assigned
                representative for any edits.
              </p>{" "}
            </dd>
            <dt id="floating">
              <h4>Can I post my floating timeshare week for rent?</h4>
            </dt>
            <dd>
              <p>
                Yes, but you will need to use the{" "}
                <a href="/rent-my-timeshare/diy">DIY rental</a> option.
                Full-service, verification, and online booking enhancements
                require a specific reservation.
              </p>
              <p>
                When you{" "}
                <a href="/rent-my-timeshare/diy">
                  add your floating timeshare rental
                </a>
                , enter the full range of possible dates. For example, if all
                weeks are available, your entry might look like this:
              </p>
              <p className="text-center">
                {" "}
                <img
                  src="https://cdn5.redweek.com/img/faq.floating-week-screen.png?GQOf0rG4HnTgfzhuYhJzUQ"
                  alt=""
                  className="image"
                  width="618"
                  height="337"
                />
              </p>{" "}
            </dd>
            <dt id="posting-contact">
              <h4>How will I know when I have a renter or buyer?</h4>
            </dt>
            <dd>
              <p>
                If you choose a DIY option, interested parties will contact you
                by email through your posting page. The email will be sent
                directly to the address you registered with, and a copy will be
                sent to your{" "}
                <a href="/account/messages" title="View your Messages">
                  Messages
                </a>{" "}
                section on the RedWeek.com site. Even if you do not choose to
                respond to inquiries through the{" "}
                <a href="/account/messages" title="View your Messages">
                  Messages
                </a>{" "}
                section, be sure to check it regularly to make sure you haven't
                missed inquiries due to email filters.
              </p>{" "}
            </dd>
            <dt id="points">
              <h4>Can I sell my timeshare points?</h4>
            </dt>
            <dd>
              <p>
                Yes, post your timeshare points for sale by going to the{" "}
                <a href="/sell-my-timeshare">Sell My Timeshare</a> page. Just
                enter the name of your point system, and go from there. Please
                note: points cannot be posted for RENT on RedWeek.com, but you
                can sell your entire points ownership.
              </p>{" "}
            </dd>
            <dt id="missing">
              <h4>Why isn't my posting showing up?</h4>
            </dt>
            <dd>
              <p>
                There are several possible reasons your posting may not be
                appearing on RedWeek.com:
              </p>
              <ol className="styled">
                {" "}
                <li>
                  {" "}
                  If your posting has never appeared on RedWeek, it may still be
                  sitting in{" "}
                  <a href="https://www.redweek.com/cart" title="View your cart">
                    your cart
                  </a>{" "}
                  awaiting payment. Postings require an additional fee on top of
                  your membership.{" "}
                  <a href="https://www.redweek.com/cart" title="View your cart">
                    View your cart
                  </a>
                  .{" "}
                </li>{" "}
                <li>
                  {" "}
                  Your posting has expired. Your posting expirations are
                  separate from your membership expiration date, and renewing
                  your membership does not automatically renew your postings.
                  Membership is required in order to post, but postings require
                  an additional fee of $39.99 for each 6-month rental posting,
                  and $59.99 for each 12-month resale posting. You can monitor
                  your posting expiration dates and renew postings from the{" "}
                  <a
                    href="/account/postings"
                    title="View your Timeshare Postings"
                  >
                    My Postings page
                  </a>
                  .{" "}
                </li>{" "}
                <li>
                  {" "}
                  The availability dates you posted have passed. Check the dates
                  you had advertised on your posting from the{" "}
                  <a
                    href="/account/postings?view=inactive"
                    title="View your inactive postings"
                  >
                    My Postings page
                  </a>
                  .{" "}
                </li>{" "}
                <li>
                  {" "}
                  Either you or a RedWeek.com staff member deactivated your
                  posting before its expiration. If you deactivated your own
                  posting before the expiration and want to use the remaining
                  time, simply choose to "Reactivate" the posting from the{" "}
                  <a
                    href="/account/postings?view=inactive"
                    title="View your inactive postings"
                  >
                    My Postings page
                  </a>{" "}
                  within your Account. If you did not remove your posting and
                  none of the above explanations seem to fit, please{" "}
                  <a
                    href="/contact-us"
                    title="Contact RedWeek.com customer service"
                  >
                    contact us
                  </a>
                  .{" "}
                </li>{" "}
                <li>
                  {" "}
                  If you chose the Full-Service option, you will not see your
                  posting in your account immediately - look for an email from
                  us letting us know what we need to move forward.{" "}
                </li>
              </ol>{" "}
            </dd>
            <dt id="full-service">
              <h4>Do you offer full-service options?</h4>
            </dt>
            <dd>
              <p>
                Yes, RedWeek now offers both a{" "}
                <a
                  href="/sell-my-timeshare/full-service"
                  title="An alternative to selling it yourself on RedWeek.com"
                >
                  full-service resale
                </a>{" "}
                option AND a{" "}
                <a href="/rent-my-timeshare/full-service">
                  full-service rental
                </a>{" "}
                option, where we can help with the whole process. Please see our{" "}
                <a href="/resources/faq/full-service-timeshare-resales">
                  full-service resale FAQ
                </a>{" "}
                and{" "}
                <a href="/resources/faq/full-service-timeshare-rentals">
                  full-service rental FAQ
                </a>
                .
              </p>{" "}
            </dd>
            <dt id="online">
              <h4>Can I use RedWeek's online booking system for my renters?</h4>
            </dt>
            <dd>
              <p>
                All owners now have access to use RedWeek for the rental
                agreement and payment handling — it's the standard method for
                all{" "}
                <a href="/rent-my-timeshare/full-service">
                  full-service rentals
                </a>
                . If you're using the DIY rental method, just select RedWeek's
                online booking system as your preferred payment collection
                method when adding or editing your rental posting. Please see
                our{" "}
                <a href="/resources/faq/redweek-online-booking">
                  RedWeek Online Booking System FAQ
                </a>{" "}
                for more info.
              </p>{" "}
            </dd>
          </dl>
        </div>

        <div id="youraccount" className="main-well-solid mb-2">
          <h2 className="display small mb-4">Your Account</h2>
          <dl>
            <dt id="change-info">
              <h4>How do I change my information?</h4>
            </dt>
            <dd>
              <p>
                Click the{" "}
                <a href="/account" title="View your Account page">
                  My Account
                </a>{" "}
                link from the top of any page. From there you can update your
                profile (name, email, password, phone, address), modify your
                postings, and change your email subscriptions. Please{" "}
                <a
                  href="/contact-us"
                  title="Contact RedWeek.com customer service"
                >
                  contact us
                </a>{" "}
                for assistance in changing your username.
              </p>{" "}
            </dd>
            <dt id="renew">
              <h4>How can I renew my membership and/or postings?</h4>
            </dt>
            <dd>
              <p>
                Your membership can be renewed within 60 days of expiration
                through the <a href="/account">My Account</a> page. You can
                renew your postings within 30 days of expiration through the{" "}
                <a
                  href="/account/postings"
                  title="view your timeshare postings"
                >
                  My Postings
                </a>{" "}
                section of your{" "}
                <a href="/account" title="View your Account page">
                  Account
                </a>
                .
              </p>{" "}
            </dd>
            <dt id="payment">
              <h4>Can I pay by check or money order?</h4>
            </dt>
            <dd>
              <p>
                You can pay for memberships, postings, and enhancements by check
                or money order. Just go ahead and add any items you wish to
                purchase to your{" "}
                <a href="https://www.redweek.com/cart" title="View your cart">
                  Cart
                </a>
                . When you are finished adding items, click the link under
                Payment Info in your Cart that says, "Prefer to pay by check or
                money order?". Some simple instructions for mailing in your
                payment will follow.
              </p>
              <p>
                We are not able to take check or money order payments for online
                rental bookings.
              </p>{" "}
            </dd>
            <dt id="refund">
              <h4>What is your refund policy?</h4>
            </dt>
            <dd>
              <p>
                Generally, purchases made on RedWeek are non-refundable, with a
                few exceptions.{" "}
                <a href="/tos#refunds">View our full refund policy</a> in the
                terms of service.
              </p>{" "}
            </dd>
          </dl>
        </div>

        <h2>Contact Customer Service</h2>
        <p>
          If your question wasn't answered here, please{" "}
          <a href="/contact-us" title="Contact RedWeek.com customer service">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default FAQsPage;
