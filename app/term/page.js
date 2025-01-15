'use client';

const Term = () => {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

            {/* Content */}
            <div className="space-y-8 text-[white] leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold mb-2">Welcome to Micro Sonic Work</h2>
                    <p>These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our services, you agree to be bound by the following terms. If you do not agree with these terms, please refrain from using our services.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
                    <p>These terms and conditions govern your use of our website and services, including but not limited to Digital Marketing, App Development, Web Designing & Development, Software Development, and Salesforce Development. By using our website and services, you accept these terms in full. If you disagree with any part of these terms, you must not use our services.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">2. Services</h2>
                    <p>Micro Sonic Work offers technology and marketing services as outlined on our website. We reserve the right to modify or discontinue any service at any time without notice. The pricing and scope of services will be clearly communicated before the initiation of any project. Custom work will require specific contracts that outline the deliverables, timelines, and payment structure.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">3. Client Responsibilities</h2>
                    <p>You, as the client, are responsible for providing accurate information necessary for the completion of services. This includes, but is not limited to, project details, content, and access to required platforms (such as Salesforce, CMS, etc.). Delays caused by the client’s failure to provide necessary information or approvals may impact the timeline of the project, and Micro Sonic Work is not responsible for these delays.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">4. Payment Terms</h2>
                    <p>Payments for services are due as per the terms agreed upon at the start of the project. We may require an upfront deposit before starting work. All invoices are due within the agreed payment period, usually 30 days from the invoice date, unless otherwise specified in the contract. Late payments may incur a late fee or result in the suspension of services until the outstanding balance is settled.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
                    <p>All intellectual property rights to the content created by Micro Sonic Work for your project, such as website designs, software, applications, and marketing materials, remain the property of Micro Sonic Work until full payment is received. Upon full payment, the intellectual property rights will be transferred to the client, except for any proprietary tools or pre-existing code used in the project.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">6. Confidentiality</h2>
                    <p>We respect your confidentiality and will not disclose any proprietary information shared with us during the course of the project. Similarly, you agree not to disclose any proprietary tools, techniques, or processes used by Micro Sonic Work.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">7. Warranties and Liability</h2>
                    <p>We aim to deliver high-quality work, but Micro Sonic Work does not guarantee that the service will be uninterrupted or error-free. Our services are provided “as is,” and we disclaim all warranties to the maximum extent permitted by law. In no event shall Micro Sonic Work be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the services.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">8. Termination</h2>
                    <p>Either party may terminate the agreement for services with written notice. If the client terminates the contract before the completion of the project, they are responsible for paying for all work completed up until the termination date. Micro Sonic Work reserves the right to terminate the agreement if the client fails to comply with these terms or fails to make payment.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">9. Dispute Resolution</h2>
                    <p>In case of a dispute, both parties agree to resolve matters in good faith through negotiation. If the dispute cannot be resolved, it will be subject to the laws of [Your Jurisdiction], and any legal proceedings will take place within that jurisdiction.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">10. Changes to Terms</h2>
                    <p>Micro Sonic Work reserves the right to update or change these Terms and Conditions at any time. The most current version will always be available on our website, and it is your responsibility to review them periodically.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">11. Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                    <p>Email: <a href="mailto:support@microsonic.com" className="underline">support@microsonic.com</a></p>
                    <p>Phone: [Your contact number]</p>
                    <p>Address: [Company address]</p>
                </section>
            </div>
        </div>
    );
};

export default Term;
