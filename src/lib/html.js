export const generateHtml = signatureDetails => {
  return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
    <html>
      <head>
        <title>Email Signature</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      </head>
      <body>
        <table
          style="width: 480px; font-size: 9pt; font-family: Arial, sans-serif; line-height:14px; margin: 18px;"
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <td style="width:120px; vertical-align: middle" valign="middle">
                <a href="https://www.codetwo.com/" target="_blank">
                  <img
                    border="0"
                    alt="Logo"
                    width="88"
                    height="88"
                    style="width:88px; height:88px; border:0; border-radius: 50%;"
                    src="${signatureDetails.photo}"
                  />
                </a>
              </td>
              <td
                style="width:360px; color: #131313; font-family: Arial, sans-serif; vertical-align: middle"
                valign="middle"
              >
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="padding:1px;">
                        <strong style="font-family: Arial, sans-serif; font-size: 15pt; color: #131313;">
                          ${signatureDetails.name}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:1px;">
                        <span style="font-family: Arial, sans-serif; font-size: 9pt; color: #131313;">
                          ${signatureDetails.position}, Super Dispatch
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:1px;">
                        <span style="font-family: Arial, sans-serif; font-size: 9pt; color: #131313;">
                          Office: ${signatureDetails.office}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:1px;">
                        <span style="font-family: Arial, sans-serif; font-size: 9pt; color: #131313;">
                          Direct: ${signatureDetails.direct}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;
};
