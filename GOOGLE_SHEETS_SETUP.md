# Google Sheets Integration - Complete Setup Guide

Form submissions ko Google Sheets me automatically save karne ke liye ye steps follow karein:

---

## 📋 Step 1: Google Sheet Banayein

1. **Google Sheets** kholo: https://sheets.google.com
2. **Blank spreadsheet** banayein
3. Sheet ka naam rakho (jaise: "Solar Square Contacts")
4. **First row me headers** add karein:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Phone`
   - Column E: `Message`

---

## 🔧 Step 2: Google Apps Script Setup

1. Google Sheet me **`Extensions`** menu par click karein
2. **`Apps Script`** select karein (naya tab khulega)

3. **Default code delete** karke ye code paste karein:

```javascript
function doPost(e) {
  try {
    // Active sheet ko get karein
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // JSON data parse karein
    const data = JSON.parse(e.postData.contents);
    
    // Header row check karein - agar nahi hai to add karein
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
    }
    
    // Naya row add karein with form data
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Indian timezone
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    // Success response return karein
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Data saved successfully'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Error handle karein
    return ContentService.createTextOutput(
      JSON.stringify({error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Save button** par click karein (Ctrl+S / Cmd+S)
5. Script ka naam rakho: "Form Submission Handler"

---

## 🚀 Step 3: Web App Deploy Karein

1. **`Deploy`** button par click karein (top right corner)
2. **`New deployment`** select karein
3. **Settings** configure karein:
   - **Type**: `Web app` select karein (gear icon ke saath)
   - **Description**: "Contact Form Handler" (optional)
   - **Execute as**: `Me` (aapka email)
   - **Who has access**: `Anyone` (important!)
4. **`Deploy`** button par click karein
5. **Authorization** ke liye:
   - Pehli baar "Authorize access" par click karein
   - Google account select karein
   - "Advanced" > "Go to [Project Name] (unsafe)" par click karein
   - "Allow" par click karein
6. **Web app URL copy** karein - ye aapka webhook URL hai
   - Format: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
<!-- https://script.google.com/macros/s/AKfycbz-HPvWZK4nLiAOn7bjhnuX4JXrLavWO9v1sgwnWrauRxdAgsDt4Ys-oBxU-3F1xA/exec -->
<!-- AKfycbz-HPvWZK4nLiAOn7bjhnuX4JXrLavWO9v1sgwnWrauRxdAgsDt4Ys-oBxU-3F1xA -->
---

## ⚙️ Step 4: Environment Variable Setup

1. **Project root folder** me jao (`solar-square` folder)
2. **`.env.local`** file banayein (agar nahi hai)
3. File me ye add karein:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Important**: `YOUR_SCRIPT_ID` ko apne actual script ID se replace karein (Step 3 se copy kiye gaye URL se)

**Example**:
```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbz1234567890abcdefghijklmnopqrstuvwxyz/exec
```

---

## 🔄 Step 5: Server Restart

1. **Terminal me** dev server stop karein (Ctrl+C)
2. **Phir se start** karein:
   ```bash
   npm run dev
   ```

**Note**: `.env.local` file ke changes ke liye server restart zaroori hai!

---

## ✅ Step 6: Testing

1. Browser me **Contact page** kholo: `http://localhost:3000/contact`
2. **Form fill** karein:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
3. **Submit** button par click karein
4. **Google Sheet** check karein - naya row add hona chahiye!

---

## 🐛 Troubleshooting

### Problem: Form submit ho raha hai but data sheet me nahi aa raha

**Solutions**:
1. ✅ **Web app URL** check karein - sahi hai ya nahi
2. ✅ **`.env.local`** file me URL sahi hai ya nahi
3. ✅ **Server restart** kiya hai ya nahi
4. ✅ **Google Apps Script** me "Who has access" = "Anyone" set hai ya nahi
5. ✅ **Browser console** check karein (F12) - koi error hai ya nahi

### Problem: "Authorization required" error

**Solution**:
- Apps Script me **Deploy** > **Manage deployments** > **Edit** > **Authorize access** karein

### Problem: CORS error

**Solution**:
- Google Apps Script me `doPost` function sahi se return kar raha hai ya nahi check karein
- Response format sahi hai ya nahi verify karein

---

## 📝 Additional Notes

1. **Security**: Web app URL ko public nahi karna chahiye (production me)
2. **Rate Limits**: Google Apps Script me daily execution limits hain (20,000 requests/day)
3. **Backup**: Important data ka backup zaroor rakhein
4. **Multiple Sheets**: Agar multiple sheets use karni ho, to script me sheet name specify karein

---

## 🎯 Quick Checklist

- [ ] Google Sheet banaya
- [ ] Headers add kiye (Timestamp, Name, Email, Message)
- [ ] Apps Script code paste kiya
- [ ] Script save kiya
- [ ] Web app deploy kiya
- [ ] "Anyone" access set kiya
- [ ] Webhook URL copy kiya
- [ ] `.env.local` file me URL add kiya
- [ ] Server restart kiya
- [ ] Form test kiya
- [ ] Data sheet me verify kiya

---

## 💡 Pro Tips

1. **Sheet Formatting**: Headers ko bold aur colored kar sakte ho
2. **Data Validation**: Email format check karne ke liye Google Sheets me data validation add kar sakte ho
3. **Notifications**: Apps Script me email notifications add kar sakte ho jab naya form submit ho
4. **Charts**: Google Sheets me charts add karke data visualize kar sakte ho

---

**Agar koi problem ho to mujhe batao!** 🚀
