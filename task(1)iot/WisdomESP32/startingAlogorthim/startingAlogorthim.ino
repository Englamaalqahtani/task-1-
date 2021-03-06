
#include "mbedtls/md.h"
 
void setup(){
 
  Serial.begin(115200);
 
  char const *payload = "Hello SHA 256!";
  byte shaResult[32];
 
  mbedtls_md_context_t ctx;
  mbedtls_md_type_t md_type = MBEDTLS_MD_SHA256;
 
  const size_t payloadLength = strlen(payload);         
 
  mbedtls_md_init(&ctx);
  mbedtls_md_setup(&ctx, mbedtls_md_info_from_type(md_type), 0);
  mbedtls_md_starts(&ctx);
  mbedtls_md_update(&ctx, (const unsigned char *) payload, payloadLength);
  mbedtls_md_finish(&ctx, shaResult);
  mbedtls_md_free(&ctx);
 
  Serial.print("Hash: ");
 
  for(int i= 0; i< sizeof(shaResult); i++){
      char str[3];
 
      sprintf(str, "%02x", (int)shaResult[i]);
      Serial.print(str);
  }
}
 
void loop(){}
