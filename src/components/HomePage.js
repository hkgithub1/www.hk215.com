import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Link,
  Icon,
  Divider,
} from "@mui/material";
import background from "../images/background.jpg";
import month from "../images/month.jpg";
import store from "../images/store.jpg";
import guess from "../images/guess.jpg";
import portfolio from "../images/portfolio.jpg";
import react from "../images/react.svg";
import python from "../images/python.svg";
import django from "../images/django.svg";
import postgres from "../images/postgresql.svg";
import docker from "../images/docker.svg";
import codepipeline from "../images/codepipeline.svg";
import cloudformation from "../images/cloudformation.svg";
import node from "../images/node.svg";
import dynamo from "../images/dynamo.svg";
import gke from "../images/gke.svg";
import gitlab from "../images/gitlab.svg";
import terraform from "../images/terraform.svg";
import azure from "../images/azure.svg";
import lambda from "../images/lambda.svg";
import s3 from "../images/s3.svg";

export default function HomePage() {
  const [certID, setCertID] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    if (certID != 0) {
      buttonHandler();
    }
  }, [certID]);

  useEffect(() => {
    if (data) {
      window.open(
        `${process.env.REACT_APP_PUBLIC_URL}/` +
          data?.Items?.[0]?.pdfName +
          ".pdf"
      );
    }
  }, [data]);

  const buttonHandler = () => {
    const url = `${process.env.REACT_APP_API_URL}/${certID}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    console.log(data);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
        }}
      >
        <Typography fontSize={24} fontWeight="bold" sx={{ pl: 1 }}>
          Projects:
        </Typography>
        <Grid container display="flex" flexDirection="row">
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Box
              sx={{
                bgcolor: "background.main",
                height: 150,
                width: "97%",
                boxShadow: 3,
              }}
            >
              <Stack display="flex" flexDirection="row">
                <Box
                  sx={{
                    height: 150,
                    width: 440,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="http://store.hkapp.net"
                    target="_blank"
                    fontSize={26}
                  >
                    store.hkapp.net
                  </Link>
                </Box>
                <Box component="img" src={store} alt="store" loading="lazy" />
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Stack display="flex" flexDirection="row" width="97%">
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Frontend:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={react} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>React</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Backend:
                </Typography>
                <Stack spacing={1}>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={python} height="100%" width="100%" />
                    </Icon>
                    <Typography fontSize={20}>Python</Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={django} height="100%" width="100%" />
                    </Icon>
                    <Typography fontSize={20}>Django</Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Database:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={postgres} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>PostgreSQL</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Deployment:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={docker} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>Docker</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  CI/CD:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={codepipeline} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={18}>AWS CodePipeline</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  IaC:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={cloudformation} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={18}>AWS CloudFormation</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Box
              sx={{
                bgcolor: "background.main",
                height: 150,
                width: "97%",
                boxShadow: 3,
              }}
            >
              <Stack display="flex" flexDirection="row">
                <Box
                  sx={{
                    height: 150,
                    width: 440,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="http://guess.hkapp.net"
                    target="_blank"
                    fontSize={26}
                  >
                    guess.hkapp.net
                  </Link>
                </Box>
                <Box component="img" src={guess} alt="guess" loading="lazy" />
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Stack display="flex" flexDirection="row" width="97%">
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Frontend:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={react} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>React</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Backend:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={node} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>Node JS</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Database:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={dynamo} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={18}>AWS DynamoDB</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Deployment:
                </Typography>
                <Stack spacing={1}>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={docker} height="100%" width="100%" />
                    </Icon>
                    <Typography fontSize={20}>Docker</Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={gke} height="100%" width="100%" />
                    </Icon>
                    <Typography fontSize={18}>
                      Google Kubernetes Engine
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  CI/CD:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={gitlab} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>GitLab</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  IaC:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={terraform} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>TerraForm</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Box
              sx={{
                bgcolor: "background.main",
                height: 150,
                width: "97%",
                boxShadow: 3,
              }}
            >
              <Stack display="flex" flexDirection="row">
                <Box
                  sx={{
                    height: 150,
                    width: 440,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="http://month.hkapp.net"
                    target="_blank"
                    fontSize={26}
                  >
                    month.hkapp.net
                  </Link>
                </Box>
                <Box component="img" src={month} alt="month" loading="lazy" />
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Stack display="flex" flexDirection="row" width="97%">
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Frontend:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={react} height="100%" width="100%" />
                  </Icon>
                  <Typography fontSize={20}>React</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Deployment:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={azure} width="100%" />
                  </Icon>
                  <Typography fontSize={18}>Microsoft Azure Storage</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Box
              sx={{
                bgcolor: "background.main",
                height: 150,
                width: "97%",
                boxShadow: 3,
              }}
            >
              <Stack display="flex" flexDirection="row">
                <Box
                  sx={{
                    height: 150,
                    width: 440,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="http://www.hk215.com"
                    target="_blank"
                    fontSize={26}
                  >
                    www.hk215.com
                  </Link>
                </Box>
                <Box
                  component="img"
                  src={portfolio}
                  alt="portfolio"
                  loading="lazy"
                />
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={160}
            xs={12}
          >
            <Stack display="flex" flexDirection="row" width="97%">
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Frontend:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={react} height="100%" />
                  </Icon>
                  <Typography fontSize={20}>React</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Backend:
                </Typography>
                <Stack spacing={1}>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={node} height="100%" />
                    </Icon>
                    <Typography fontSize={20}>Node JS</Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Icon>
                      <img src={lambda} height="100%" />
                    </Icon>
                    <Typography fontSize={20}>AWS Lambda</Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Database:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={dynamo} height="100%" />
                  </Icon>
                  <Typography fontSize={18}>AWS DynamoDB</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: 150,
                  width: "16.6%",
                }}
              >
                <Typography fontSize={22} sx={{ textDecoration: "underline" }}>
                  Deployment:
                </Typography>
                <Stack flexDirection="row">
                  <Icon>
                    <img src={s3} height="100%" />
                  </Icon>
                  <Typography fontSize={20}>AWS S3</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "background.secondary" }} />
        <Typography fontSize={24} fontWeight="bold" sx={{ pl: 1 }}>
          Certifications:
        </Typography>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Stack spacing={1}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(1)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS Cloud Practitioner
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(2)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS Solutions Architect Associate
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(3)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS Developer Associate
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(4)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS SysOps Administrator Associate
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(5)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS Security Specialty
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(6)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              AWS Networking Specialty
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(7)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              Terraform Associate
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCertID(8)}
              sx={{ px: 1, fontWeight: "bold", borderRadius: 3 }}
            >
              Kubernetes CKA
            </Button>
          </Stack>
        </Grid>
      </Box>
    </>
  );
}
