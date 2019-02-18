import React from 'react';
import { Button, Input, Alert } from 'reactstrap';
import ClipboardJS from 'clipboard';

new ClipboardJS('.copy-to-clipboard');

export const renderOutlookInstructions = () => {
  return (
    <div>
      <h4> Steps to apply your signature in Outlook</h4>
      <ol>
        <li>
          <Button
            className="copy-to-clipboard"
            data-clipboard-target="#signaturePreview"
          >
            Copy signature to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>
          In Outlook 2016/2013/2010 click, <strong>File</strong> to go to the
          Backstage view.
        </li>
        <li>
          Go to <strong>Options</strong>.
        </li>
        <li>
          Click the <strong>Mail</strong> tab and then
          <strong>Signatures</strong> in the <strong>Compose messages </strong>
          section.
        </li>
        <li>
          Create a new signature by clicking the <strong>New </strong> Button.
        </li>
        <li>
          <strong>Paste</strong> the copied signature into the
          <strong>Edit signature</strong> section (Ctrl + V).
        </li>
        <li>
          Click <strong>OK</strong>.
        </li>
      </ol>
    </div>
  );
};

export const renderOutlook365Instructions = () => {
  return (
    <div>
      <h4> Steps to apply your signature in Outlook on the web (Office 365)</h4>
      <ol>
        <li>
          <Button
            className="copy-to-clipboard"
            data-clipboard-target="#signaturePreview"
          >
            Copy signature to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>Log in to Office 365.</li>
        <li>
          Choose <strong>Mail</strong> from the list of available apps on the
          Office 365 welcome screen.
        </li>
        <li>
          Click the <strong>Gear icon</strong> in the upper right corner of the
          screen and choose <strong>Mail</strong> in the
          <strong>Your app settings</strong> section.
        </li>
        <li>
          In the <strong>Layout</strong> section (left-hand side of the screen),
          choose <strong>Email signature</strong>.
        </li>
        <li>Paste the copied signature directly in the signature editor.</li>
        <li>
          Save changes by clicking the <strong>Save</strong> Button above the
          signature options.
        </li>
      </ol>
    </div>
  );
};

export const renderThunderbirdInstructions = (html, generateHtml) => {
  return (
    <div>
      <h4> Steps to apply your signature in Thunderbird</h4>
      <ol>
        <li>
          <Button onClick={generateHtml}>Generate HTML</Button>
          <br /> <br />
          <Input
            type="textarea"
            id="signatureHtmlDestThunderbird"
            className="output-html-textarea"
            value={html}
            rows={10}
            cols={15}
            readOnly
          />
          <br /> <br />
        </li>
        <li>
          <Button
            className="copy-to-clipboard"
            data-clipboard-target="#signatureHtmlDestThunderbird"
          >
            Copy the HTML to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>Open Mozilla Thunderbird.</li>
        <li>
          Click on your email account name in the folder tree in the left pane.
        </li>
        <li>
          Click <strong>View settings for this account</strong> under the
          <strong>Accounts</strong> section.
        </li>
        <li>
          Scroll down to <strong>Signature text</strong> and select the
          <strong>Use HTML</strong> checkbox.
        </li>
        <li>Paste the copied HTML code into the signature input field.</li>
        <li>
          Click <strong>OK</strong> to confirm changes.
        </li>
      </ol>
    </div>
  );
};

export const renderGmailInstructions = () => {
  return (
    <div>
      <h4> Steps to apply your signature in Gmail</h4>
      <div>
        IMPORTANT: Before you begin, make sure that you don’t have
        <strong>Plain text mode</strong> enabled. To learn how to disable it,
        <a
          href="https://www.mail-signatures.com/articles/how-to-add-or-change-an-email-signature-in-gmailgoogle-apps/#plain-text-mode"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        .
      </div>
      <br />
      <ol>
        <li>
          <Button
            className="copy-to-clipboard"
            data-clipboard-target="#signaturePreview"
          >
            Copy signature to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>Login to Gmail/G Suite.</li>
        <li>
          Click the gear icon in the upper right corner and choose
          <strong>Settings</strong>.
        </li>
        <li>
          On the <strong>General</strong> tab (default), scroll down to the
          <strong>Signature</strong> section.
        </li>
        <li>
          <strong>Paste</strong> the copied signature in the
          <strong>Edit signature</strong> section (Ctrl + V).
        </li>
        <li>
          Choose whether to insert the signature at the very bottom of the
          conversation chain, or under the latest replies (optional).
        </li>
        <li>
          Scroll down and click <strong>Save changes</strong>.
        </li>
      </ol>
    </div>
  );
};

export const renderExchangeServerInstructions = (html, generateHtml) => {
  return (
    <div>
      <h4> Steps to apply your signature in Exchange Server</h4>
      <Alert color="danger">
        <strong>Note!</strong> These instructions explain how to apply the
        signature template centrally on the server side. This requires
        administrator’s permissions. If you wish to apply the signature on the
        user’s end, e.g. in MS Outlook, change the email platform in the top
        left corner of this generator and follow the instructions.
      </Alert>
      <ol>
        <li>
          <Button onClick={generateHtml}>Generate HTML</Button>
          <br />
          <br />
          <Input
            type="textarea"
            value={html}
            id="signatureHtmlDestExchange"
            className="output-html-textarea"
            rows={10}
            cols={15}
            readOnly
          />
          <br /> <br />
        </li>
        <li>
          <Button
            data-clipboard-target="#signatureHtmlDestExchange"
            className="copy-to-clipboard"
          >
            Copy the HTML to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>
          Go to the <strong>Exchange admin center</strong>.
        </li>
        <li>
          Go to <strong>mail flow &gt; rules</strong>.
        </li>
        <li>
          Click the <strong>plus (+)</strong> Button and choose
          <strong>Apply disclaimers</strong>.
        </li>
        <li>
          In the window that opens, name your new signature and define
          conditions under which it should be applied.
        </li>
        <li>
          Click <strong>Enter text</strong> on the right side of the window and
          paste the copied HTML code.
        </li>
        <li>
          Confirm by clicking the <strong>Save</strong> Button.
        </li>
      </ol>
    </div>
  );
};

export const renderExchangeOnlineInstructions = (html, generateHtml) => {
  return (
    <div>
      <h4> Steps to apply your signature in Exchange Online</h4>
      <Alert color="danger">
        <strong>Note!</strong> This guide shows how to set up an Office 365
        global email signature. You need Office 365 global admin permissions to
        do it. If you wish to apply the signature on the user’s end, e.g. in MS
        Outlook, change the email platform in the top left corner of this
        generator and follow the instructions.
      </Alert>
      <ol>
        <li>
          <Button onClick={generateHtml}>Generate HTML </Button>
          <br /> <br />
          <Input
            type="textarea"
            value={html}
            id="signatureHtmlDestExchangeOnline"
            className="output-html-textarea"
            rows={10}
            cols={15}
            readOnly
          />
          <br /> <br />
        </li>
        <li>
          <Button
            data-clipboard-target="#signatureHtmlDestExchangeOnline"
            className="copy-to-clipboard"
          >
            Copy the HTML to the clipboard
          </Button>
          <br />
          <br />
        </li>
        <li>Log in to Office 365 with admin’s credentials.</li>
        <li>
          Go to <strong>Office 365 admin center</strong> (Choose
          <strong>Admin</strong> from the list of available apps).
        </li>
        <li>
          On the <strong>admin center</strong> menu (bottom left), choose
          <strong>Exchange</strong>.
        </li>
        <li>
          Go to <strong>mail flow &gt; rules</strong>.
        </li>
        <li>
          Click the <strong>plus (+)</strong> Button and choose
          <strong>Apply disclaimers</strong>.
        </li>
        <li>
          In the window that opens, name the new rule and define conditions
          under which the signature should be applied.
        </li>
        <li>
          Click <strong>Enter text</strong> on the right-hand side of the window
          and paste the copied HTML code.
        </li>
        <li>
          Confirm by clicking the <strong>Save</strong> Button.
        </li>
      </ol>
    </div>
  );
};
