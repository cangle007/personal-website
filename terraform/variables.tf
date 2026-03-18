variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-1"
}

variable "bucket_name" {
  description = "Existing S3 bucket name"
  type        = string
  default     = "cangle"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}
