function extractKycDetails(data) {
  const kycDetails = {};
  kycDetails.kycType = 'VIDEO_KYC';
  kycDetails.remarks = data?.auditor_actions?.auditor_remarks || null;
  kycDetails.attachments = [];

  data.actions.reduce((kycDetails, action) => {
    if (action.ocr_result) {
      kycDetails.name = action?.ocr_result?.name || null;
      kycDetails.dob = action?.ocr_result?.dob || null;
      kycDetails.fathersName = action?.ocr_result?.fathers_name || null;
    }

    if (action.type === 'digilocker' && action.details.aadhaar) {
      kycDetails.address = action.details.aadhaar?.permanent_address || null;
    }

    kycDetails.faceMatchResult = {
      matchResult: action.face_match_result?.match_result ?? null,
      confidence: action.face_match_result?.match_confidence ?? null,
    };

    return kycDetails;
  }, kycDetails);

  //   console.log(newObj);
  return kycDetails;
}

const res = extractKycDetails({
  id: 'KID250502142019822Q5T2S3SGWZS1J3',
  updated_at: '2025-05-02 14:23:04',
  created_at: '2025-05-02 14:20:20',
  status: 'approval_pending',
  customer_identifier: '9876543210',
  actions: [
    {
      id: 'KIA2505021420198542MHHR6QK9GIB5M',
      action_ref: 'video-1',
      type: 'video',
      status: 'approved',
      file_id: 'FIL2505021420489542F6XVWFIW3ZSQO',
      sub_file_id: 'FIL250502142303496XEXHRIRTNJEFGO',
      validation_result: {},
      completed_at: '2025-05-02 14:20:50',
      face_match_obj_type: 'match_required',
      face_match_status: 'new',
      obj_analysis_status: 'na',
      method: 'otp_text',
      otp: '864689',
      processing_done: true,
      retry_count: 2,
      rules_data: {
        approval_rule: [],
      },
    },
    {
      id: 'KIA25050214201986122UKJTZ2VUPC5Z',
      action_ref: 'digilocker-1',
      type: 'digilocker',
      status: 'approval_pending',
      execution_request_id: 'RID250502142019861R4GHNQFA3XRWW5',
      details: {
        aadhaar: {
          id_number: 'xxxxxxxx3028',
          document_type: 'aadhaar',
          id_proof_type: 'ID_AND_ADDRESS_PROOF',
          gender: 'M',
          image:
            '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',
          name: 'RAHUL',
          dob: '20/07/1999',
          actionent_address:
            'H.No.-24,KOTLA VIHAR PHASE-2,NAZAFGARH,Tilang Pur Kotla,Tilangpur Kotla,West Delhi,Delhi,110043',
          permanent_address:
            'H.No.-24,KOTLA VIHAR PHASE-2,NAZAFGARH,Tilang Pur Kotla,Tilangpur Kotla,West Delhi,Delhi,110043',
          actionent_address_details: {
            address:
              'H.No.-24,KOTLA VIHAR PHASE-2,NAZAFGARH,Tilang Pur Kotla,Tilangpur Kotla,West Delhi,Delhi,110043',
            locality_or_post_office: 'Tilangpur Kotla',
            district_or_city: 'West Delhi',
            state: 'Delhi',
            pincode: '110043',
          },
          permanent_address_details: {
            address:
              'H.No.-24,KOTLA VIHAR PHASE-2,NAZAFGARH,Tilang Pur Kotla,Tilangpur Kotla,West Delhi,Delhi,110043',
            locality_or_post_office: 'Tilangpur Kotla',
            district_or_city: 'West Delhi',
            state: 'Delhi',
            pincode: '110043',
          },
        },
      },
      validation_result: {},
      completed_at: '2025-05-02 14:22:20',
      face_match_obj_type: 'strict_match_required',
      face_match_status: 'new',
      obj_analysis_status: 'na',
      processing_done: true,
      retry_count: 1,
    },
    {
      id: 'KIA2505021420198673QH96VGPTH9TJK',
      action_ref: 'id_proof-1',
      type: 'image',
      status: 'approval_pending',
      file_id: 'FIL250502142227027YC6DDBKMAF76AU',
      ocr_result: {
        id_no: 'CYGPR6311D',
        name: 'RAHUL',
        fathers_name: 'BHASKARPRASAD',
        dob: '20/07/1999',
        id_type: 'PAN',
        encoded_signature:
          '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',
        central_db_match_result: 'matched',
        central_db_lookup_details:
          '{"is_pan_dob_valid":true,"name_matched":true}',
      },
      validation_result: {},
      completed_at: '2025-05-02 14:22:28',
      face_match_obj_type: 'strict_match_required',
      face_match_status: 'new',
      obj_analysis_status: 'done',
      processing_done: true,
      retry_count: 1,
      rules_data: {
        strict_validation_types: ['pan'],
      },
    },
    {
      id: 'KIA250502142019874N9M1G3SXEJK5EA',
      action_ref: 'selfie-1',
      type: 'selfie',
      status: 'approval_pending',
      file_id: 'FIL2505021422345623Q4DJ78GQ1TXQX',
      validation_result: {},
      completed_at: '2025-05-02 14:22:35',
      face_match_obj_type: 'match_required',
      face_match_status: 'new',
      obj_analysis_status: 'na',
      method: 'otp_none',
      processing_done: true,
      retry_count: 0,
    },
  ],
  reference_id: 'CRN250502142019822RS',
  transaction_id: 'CRN250502142019822RS',
  expire_in_days: 10,
  reminder_registered: false,
  workflow_name: 'VIDEO_KYC_DIGI',
  auto_approved: false,
  template_id: 'KTP250502141900800JJ584CD3CMBPBV',
});

console.log('RES: ', res);
