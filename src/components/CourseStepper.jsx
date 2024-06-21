import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const steps = [
  "Detalles del Curso",
  "Coordinación y Disertantes",
  "Fecha y Duración",
  "Descripción y Lugar",
  "Objetivos",
];

export default function CourseStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [courseData, setCourseData] = React.useState({
    title: "",
    coordinacion: "",
    disertantes: "",
    start: "",
    duration: "",
    classes: "",
    price: 0,
    workload: 0,
    mail: "",
    description: "",
    place: "",
    imageUrl: "",
    objetivos: "",
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
          <pre>{JSON.stringify(courseData, null, 2)}</pre>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
            {getStepContent(activeStep, courseData, handleChange)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

function getStepContent(step, courseData, handleChange) {
  switch (step) {
    case 0:
      return (
        <Box>
          <TextField
            label="Título"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Coordinación"
            name="coordinacion"
            value={courseData.coordinacion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      );
    case 1:
      return (
        <Box>
          <TextField
            label="Disertantes"
            name="disertantes"
            value={courseData.disertantes}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText="Separar nombres con comas"
          />
        </Box>
      );
    case 2:
      return (
        <Box>
          <TextField
            label="Inicio"
            name="start"
            value={courseData.start}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Duración"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      );
    case 3:
      return (
        <Box>
          <TextField
            label="Descripción"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Lugar"
            name="place"
            value={courseData.place}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      );
    case 4:
      return (
        <Box>
          <TextField
            label="Objetivos"
            name="objetivos"
            value={courseData.objetivos}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText="Separar objetivos con comas"
          />
        </Box>
      );
    default:
      return "Unknown step";
  }
}
