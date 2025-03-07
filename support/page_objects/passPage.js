class PassPage
{
    constructor(page)
    {
        this.portAccess=page.locator("//input[@id='portAccess']");
        this.passmanagementDrop=page.locator("//a[normalize-space(text())='Pass Management']");
        this.selectapplyGatePass=page.locator("//a[normalize-space(text())='Apply Gate Pass']");
        this.portDropUi=page.locator("//select[@id='portsId']");
        this.gateDropUi=page.locator("//select[@id='gateIdStr']");
        this.passTypeDropUi=page.locator("//select[@id='passTypeIdStr']");
        this.passdurationDropUi=page.locator("//select[@id='passDurationIdStr']");
        this.purposeDropUi=page.locator("//select[@id='reasonOfVisitIdStr']");
        this.dateOfVisitDropUi=page.locator("//input[@id='dateOfVisitStr']");
        this.visitHour=page.locator("//input[@id='dateOfVisitHour']");
        this.visitMinutes=page.locator("//input[@id='dateOfVisitMin']");
        this.hostCompanyUi=page.locator("//input[@id='hostCompanyName']");
        this.visitAreaName=page.locator("//input[@id='companyNameHC']");
        this.hcompanyselect=page.locator("//div[normalize-space(text())='HASCO GENERAL TRADING']");
        this.perpassAmountUi=page.locator("//input[@id='perPassAmount']");
        this.visaTypeUi=page.locator("//select[@id='searchVisaTypeIdStr']");
        this.eidUi=page.locator("//input[@id='searchEmiratesId']");
        this.dobUi=page.locator("//input[@id='dateOfBirth']");
        this.genderUi=page.locator("//select[@id='searchGender']");
        this.termsAndCondiUi=page.locator("//input[@id='acceptTermsCondition']");
        this.searchButton=page.locator("//input[@id='searchVisitor']");
        this.errorValidManually=page.locator("//div[@class='text-danger']");
        this.visfirstName=page.locator("//input[@id='firstName']");
        this.vislastName=page.locator("//input[@id='lastName']");
        this.visemail=page.locator("//input[@id='email']");
        this.visMobile=page.locator("//input[@id='mobileNumber']");
        this.vispassPortNumber=page.locator("//input[@id='passportNo']");
        this.visNationalField=page.locator("//input[@id='nationalityValue']");
        this.selectVisNationality=page.locator(`//div[normalize-space(text())='India']`);
        this.visCompany=page.locator("//input[@id='vistorCompanyName']");
        this.passportFile=page.locator("//input[@name='Passport']");
        this.personalFile=page.locator("//input[@name='Photo']");
        this.eidFile=page.locator("//input[@name='Emirates Id']");
        this.uidFileUpload=page.locator("//input[@name='Unique Identification Document(UID)']");
        this.supportingaFile=page.locator("//input[@name='Supporting Documents']");
        this.personalPic=page.locator("(//input[@id='existingUserFilePath'])[1]")
        this.passportup=page.locator("(//input[@id='existingUserFilePath'])[2]")
        this.suppportDocUp=page.locator("(//input[@id='existingUserFilePath'])[3]")
        this.eidUp=page.locator("(//input[@id='existingUserFilePath'])[4]")
        this.dnaUp=page.locator("(//input[@id='existingUserFilePath'])[5]")
        this.addVisitor=page.locator("//input[@id='addVisitor']");
        this.editButton=page.locator("(//a[@data-bind='click: $root.editUser'])[1]");
        this.deletButton=page.locator("(//a[@data-bind='click: $root.deleteUser'])[2]");
        this.yesConfirm=page.locator("//button[normalize-space(text())='Yes,Confirm Details']");
        this.deleteYes=page.locator("//button[@class='btn btn-primary bootbox-accept']");
        this.finalSubmit=page.locator("//input[@id='submitId']");
        this.creditDebit=page.locator("//span[normalize-space(text())='Debit/Credit']");
        this.masterCard=page.locator("//img[@id='MasterCard']");
        this.paymentTermCond=page.locator("//span[normalize-space(text())='for this payment']");
        this.agreeandPay=page.locator("//button[@id='agree']");
        this.cardNumberInput=page.locator("//input[@id='card_number']");
        this.cvnInput=page.locator("//input[@id='card_cvn']");
        this.nextButton=page.locator("//input[@name='commit']");
        this.finalPay=page.locator("//input[@name='commit']");
        this.confirmationPay=page.locator("//label[@class='successCard-header']");
        this.confirmApprovalAlert=page.locator("//div[@class='bootbox-body']");
        this.alertOk=page.locator("//button[@class='btn btn-primary bootbox-accept']");
        this.notifyMe=page.locator("//label[normalize-space(text())='Notify me with the payment status.']");
        this.emailForPayment=page.locator("//input[@placeholder='Enter your e-mail id']");
        this.enterManually=page.locator("//button[normalize-space(text())='Enter Manually']");
        this.adminDropdown=page.locator("//a[normalize-space(text())='Admin']");
        this.cancelOption=page.locator("//a[normalize-space(text())='Cancel Pass']");
        this.referenceNumInput=page.locator("//input[@id='passRefNumber']");
        this.threeDot=page.locator("//i[@class='bi bi-three-dots-vertical tableIcon']");
        this.viewRenew=page.locator("//a[normalize-space(text())='View']");
        this.renewSubmit=page.locator("//input[@id='renewPassButton']");
        this.remarkInput=page.locator("//textarea[@id='remarks']");
        this.cancelSubmit=page.locator("//input[@id='submitid']");
        this.cancelConfirmtion=page.locator("//label[normalize-space(text())='Pass Cancelled successfully.']");
        this.passManaDrop=page.locator("//a[normalize-space(text())='Pass Management']");
        this.viewAllPassOption=page.locator("//a[normalize-space(text())='View All Passes']");
        this.approvePassOption=page.locator("//a[normalize-space(text())='Pass Approval']");
        this.lostPassOption=page.locator("//span[normalize-space(text())='Lost']");
        this.viewLostPass=page.locator("//i[@class='bi bi-eye tableIcon action-icon']");
        this.remarkLostPass=page.locator("//textarea[@id='remarks']");
        this.rejectRemark=page.locator("//textarea[@id='rejectRemarks']");
        this.rejectButton2=page.locator("//input[@id='rejectionModalId']");
        this.uploadfileLostPass=page.locator("//input[@name='remarkFile']");
        this.submitLostPass=page.locator("//input[@id='create']");
        this.lostPassStatus=page.locator("//input[@id='create']");
        this.printPass=page.locator("//a[normalize-space(text())='Print Pass']");
        this.checkboxForPrint=page.locator("(//input[@type='checkbox'])[1]");
        this.donwloadPass=page.locator("//input[@id='download']");
        this.yesForDownload=page.locator("//button[normalize-space(text())='Yes']");
        this.searchForPassRefence=page.locator("//input[@id='tableSearch']");
        this.completedStatus=page.locator("//span[normalize-space(text())='Completed']");
        this.openViewOption=page.locator("//i[@class='bi bi-three-dots-vertical tableIcon']");
        this.selectViewButton=page.locator("//a[normalize-space(text())='View']");
        this.approveEdit=page.locator("(//i[@class='bi bi-pencil-fill tableIcon action-icon'])[1]");
        this.approvePhotoEdit=page.locator("(//label[@class='form-file-name']//a)[1]");
        this.approvePassportEdit=page.locator("(//label[@class='form-file-name']//a)[2]");
        this.approveSupportEdit=page.locator("(//label[@class='form-file-name']//a)[3]");
        this.approveEmiratesEdit=page.locator("(//label[@class='form-file-name']//a)[4]");
        this.approveClose=page.locator("(//button[@class='btn-close'])[1]");
        this.approveButton=page.locator("//input[@id='approveId']");
        this.rejectButton=page.locator("//input[@id='rejectId']");
        this.returnButton=page.locator("//input[@id='returnId']");
        this.returnReasonMessage=page.locator("//textarea[@id='returnRemarks']");
        this.confirmreturnButton=page.locator("//input[@id='returnModalId']");
        this.nextapproveButton=page.locator("//input[@id='nextId']");
        this.approveSuccessMess=page.locator("//label[normalize-space(text())='Pass Approved Successfully']");
        this.rejectionSuccMess=page.locator("//label[normalize-space(text())='Pass has been Rejected successfully']");
        this.expireStatus=page.locator("//span[normalize-space(text())='Expired']");
        this.saveAsDraft=page.locator("//input[@id='saveAsDraft']");
        this.submitforDraft=page.locator("//button[@id='saveAsDraftSubmit']");
        this.draftSuccessMess=page.locator("//label[normalize-space(text())='Draft Saved Successfully']");
        this.myWorkspace=page.locator("//a[normalize-space(text())='My Workspace']");
        this.myDraft=page.locator("//a[normalize-space(text())='My Draft']"); 
        this.eyeIcon=page.locator("(//img[@class='iconSquare'])[1]");
        this.moreThanTenError=page.locator("//div[normalize-space(text())='A Pass can have only upto 10 visitors.']");
        this.okForErrorMoreThanten=page.locator("//button[normalize-space(text())='OK']");
        this.okForAlert=page.locator("//button[normalize-space(text())='OK']");
        this.forPrintStatus=page.locator("//span[normalize-space(text())='For Print']");
        this.passPrintingStatus=page.locator("//span[normalize-space(text())='Printing']");
        this.openPicApproval=page.locator("//a[normalize-space(text())='Photo.png']");
        this.openPassportApproval=page.locator("//a[normalize-space(text())='Passport.pdf']");
        this.openUniqueApproval=page.locator("//a[normalize-space(text())='Unique_Identification_Document.jpg']");
        this.openEmiratesApproval=page.locator("//a[normalize-space(text())='Emirates_Id.pdf']");
        this.openSupportiveApproval=page.locator("//a[normalize-space(text())='Supporting_Documents.pdf']");
        this.openSupportiveDocApproval=page.locator("//a[normalize-space(text())='Supporting_Documents.pdf']");
        this.openUIDApproval=page.locator("//a[normalize-space(text())='Unique_Identification_Document.pdf']");
        this.advanceSearchButton=page.locator("//button[normalize-space(text())='Advanced Search']");
        this.referenceInput=page.locator("//input[@id='searchPassRefNumber']");
        this.searchFirstnameInput=page.locator("//input[@id='searchVisitorName']");
        this.searchLastnameInput=page.locator("//input[@id='searchVisitorlastName']");
        this.searchHosctComInput=page.locator("//input[@id='searchHostCompanyName']");
        this.searchVisitorNameInput=page.locator("//input[@id='searchVisitorCompany']");
        this.searchVistotrCountryInput=page.locator("//input[@id='nationalityValue']");
        this.searchEidInput=page.locator("//input[@id='searchEmiratesId']");
        this.searchPassportInput=page.locator("//input[@id='searchPassportNo']");
        this.forvalidationHostCom=page.locator("//td[normalize-space(text())='Host Company']");
        this.searcgButton=page.locator("//input[@id='Search']");
        this.amendementMessageSuccess=page.locator("//label[normalize-space(text())='Pass Returned for Amendment Successfully']")

    }
}

module.exports = {PassPage}